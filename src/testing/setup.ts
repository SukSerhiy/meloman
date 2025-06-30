import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn().mockResolvedValue(null) },
  }),
  initReactI18next: {
    type: "3rdParty",
    init: vi.fn(),
  },
}));
