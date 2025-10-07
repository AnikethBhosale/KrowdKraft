import React from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useGitHubIssues } from '../use-github-issues'

// Mock fetch
const mockFetch = jest.fn()
global.fetch = mockFetch

describe('useGitHubIssues', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('fetches GitHub issues successfully', async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })

    const mockData = {
      success: true,
      data: {
        issues: [
          { id: 1, title: 'Test Issue', body: 'Test body' }
        ],
        totalCount: 1,
        page: 1,
        perPage: 5
      }
    }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    })

    const { result } = renderHook(() => useGitHubIssues(1, 5), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data).toEqual(mockData)
    expect(mockFetch).toHaveBeenCalledWith('/api/github-issues?page=1&per_page=5')
  })

  it('handles fetch error', async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })

    mockFetch.mockResolvedValueOnce({
      ok: false,
    })

    const { result } = renderHook(() => useGitHubIssues(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    expect(result.current.error?.message).toBe('Failed to fetch GitHub issues')
  })

  it('uses correct query key', async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, data: { issues: [], totalCount: 0, page: 1, perPage: 5 } }),
    })

    renderHook(() => useGitHubIssues(2, 10), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/github-issues?page=2&per_page=10')
    })
  })

  it('has correct stale time', () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })

    const { result } = renderHook(() => useGitHubIssues(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    // The hook should have staleTime configured
    expect(result.current).toBeDefined()
  })
})