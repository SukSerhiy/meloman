import { describe, it, vi, expect, beforeAll, afterEach, afterAll } from "vitest";
import { render, screen } from "testing/utils";
import userEvent from "@testing-library/user-event";
import MockedTopLoadingBar from "testing/mocks/reactTopLoadingBarMock";
// import { createServer } from "testing/server";
import { API_HOST } from "services/http";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { Home } from "./";

vi.mock("react-top-loading-bar", () => ({
  __esModule: true,
  default: MockedTopLoadingBar,
}));

const server = setupServer();

type RequestParams = {
  total: number;
  limit?: number;
  offset?: number;
};

const getLastReleases = (params: RequestParams) => {
  const url = new URL(`${API_HOST}/v1/browse/new-releases`);
  if (Object.keys(params).length > 0) {
    Object.keys(params).forEach((key) => {
      const value = params[key as keyof RequestParams];
      if (value !== undefined) {
        url.searchParams.append(key, value.toString());
      }
    });
  }
  const { limit = 1, offset = 0, total } = params;
  return http.get(url.toString(), () => {
    return HttpResponse.json({
      albums: {
        total,
        limit,
        offset,
        items: Array.from({ length: limit }, (_, i) => ({
          id: `${i + 1}`,
          name: `Test Album ${i + 1}`,
          release_date: "2023-01-01",
          href: `${API_HOST}/v1/albums/${i + 1}`,
          images: [{ url: `https://i.scdn.co/image/${i + 1}` }],
          artists: [{ name: `Test Artist ${i + 1}` }],
        })),
      },
    });
  });
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Home", () => {
  it("renders loading bar on load", async () => {
    server.use(getLastReleases({ total: 1 }));
    render(<Home />);
    expect(screen.getByTestId('loading-bar')).toBeInTheDocument();
  });

  it("renders with 5 albums", async () => {
    server.use(getLastReleases({ total: 5, limit: 5, offset: 0 }));

    render(<Home />);
    const links = await screen.findAllByRole('link', { name: /album/i });

    expect(links).toHaveLength(5);
  });

  it("renders pagination when total is more than limit", async () => {
    server.use(getLastReleases({ total: 10, limit: 5, offset: 0 }));
    render(<Home />);
    const pagination = await screen.findByTestId('pagination');
    expect(pagination).toBeInTheDocument();
  });

  // it("handles API errors gracefully", async () => {
  //   server.use(
  //     http.get(`${API_HOST}/v1/browse/new-releases`, () => {
  //       return new HttpResponse(null, { status: 500 });
  //     })
  //   );
  //   render(<Home />);
  //   expect(await screen.findByText(/error/i)).toBeInTheDocument();
  // });

  // it("handles page navigation", async () => {
  //   const user = userEvent.setup();
  //   server.use(
  //     getLastReleases({ total: 10, limit: 5, offset: 0 }),
  //     getLastReleases({ total: 10, limit: 5, offset: 5 })
  //   );

  //   render(<Home />);
  //   const nextButton = await screen.findByTestId('next-page-btn');
  //   await user.click(nextButton);

  //   // Verify the second page albums are loaded
  //   const albums = await screen.findAllByRole('link', { name: /album/i });
  //   expect(albums[0]).toHaveTextContent('Test Album 6');
  //   expect(albums[4]).toHaveTextContent('Test Album 10');
  // });
});
