import type { NextPage } from "next";
import {
  Header,
  Footer,
  SEO,
  PageTitle,
  CardInformasi,
  SectionGrub,
} from "components";

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Open Gate HMH TEP UM"
        description="Pusat Informasi terpadu HMJ Teknologi Pendidikan UM 2022."
        image=""
      />
      <Header title="Beranda" />
      <PageTitle
        title="Open Gate HMJ TEP UM"
        description="Pusat Informasi terpadu HMJ Teknologi Pendidikan UM 2022."
      />
      <SectionGrub title="Informasi Terbaru">
        <CardInformasi
          title="Open Recruitment 2022"
          description="Informasi rekrutmen pengurus HMJ TEP UM periode 2022"
        />
      </SectionGrub>
      <Footer />
    </>
  );
};

export default Home;
