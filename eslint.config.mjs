import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "components/globe-demo.tsx",
    "components/ui/globe.tsx",
    "app/components/Globe.tsx",
    "app/components/HeroSection.tsx",
    "app/components/CapabilitiesGrid.tsx",
    "app/components/TechSection.tsx",
    "app/components/CTASection.tsx",
    "app/components/LogoStrip.tsx",
    "app/components/PricingSection.tsx",
    "*.test.js",
    "test-*.js",
    "get-zoho-token.js",
  ]),
]);

export default eslintConfig;
