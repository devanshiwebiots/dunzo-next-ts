import type { Metadata } from "next";
import "../../src/index.scss";
import NoSsr from "@/utils/NoSsr";
import { Outfit, Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import MainProvider from "@/utils/MainProvider";
import { I18nProvider } from "./i18n/i18n-context";
import { detectLanguage } from "./i18n/server";
import SessionWrapper from "@/CommonComponent/SessionWrapper";
import { authoption } from "./api/auth/[...nextauth]/authOption";
import { getServerSession } from "next-auth";
import ErrorBoundary from "@/CommonComponent/ErrorBoundry";

const outfit = Outfit({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--outfit",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "Dunzo - Premium Admin Template",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lng = await detectLanguage();
  const session = await getServerSession(authoption);

  return (
    <I18nProvider language={lng}>
      <html lang="en">
        <head>
          <link rel="icon" href="/assets/images/favicon.png" type="image/x-icon" />
          <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0"></script>
        </head>
        <body suppressHydrationWarning={true} className={`${outfit.variable} ${roboto.variable}`}>
          <ErrorBoundary>
            <NoSsr>
              <SessionWrapper session={session}>
                <MainProvider>
                  <NextTopLoader color="#307EF3" showSpinner={false} />
                  {children}
                </MainProvider>
                <ToastContainer />
              </SessionWrapper>
            </NoSsr>
          </ErrorBoundary>
        </body>
      </html>
    </I18nProvider>
  );
}
