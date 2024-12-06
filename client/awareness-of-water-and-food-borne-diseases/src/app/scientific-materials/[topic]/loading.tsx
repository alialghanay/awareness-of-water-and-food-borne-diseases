import PageContiner from "@/components/ui/page-continer";
import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <PageContiner>
      <section className="h-screen w-screen flex justify-center items-center">
        <Spinner size="lg" color="primary" />
      </section>
    </PageContiner>
  );
}
