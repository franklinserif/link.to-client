import { FC } from "react";
import { LinkShortenerForm } from "@components/LinkShortener/LinkShortenerForm";
import { LinkShortCard } from "@components/LinkShortener/LinkShortCard";
import { Link } from "@interfaces/entities";
import { HTTPLinks } from "@http/links";

interface Props {
  id: string | undefined;
}

export const LinkShortener: FC<Props> = async ({ id }) => {
  let link: Link | null = null;

  if (id) {
    const [linkInformation, _] = await HTTPLinks.getLink(id);
    link = linkInformation;
  }

  return (
    <section className="mt-20 max-w-[900px] w-full h-[600px] flex justify-center items-center flex-col">
      {link ? (
        <LinkShortCard link={link} />
      ) : (
        <>
          <h1 className="relative px-5 z-10 text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-main  text-center font-sans font-bold">
            Paste the URL to be shortened
          </h1>
          <br />
          <LinkShortenerForm />
        </>
      )}
    </section>
  );
};
