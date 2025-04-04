import { services } from "@/data/services";

export async function generateStaticParams() {
  return Object.keys(services).map((serviceId) => ({
    serviceId,
  }));
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}