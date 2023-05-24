import { useState, useEffect } from "react";

interface Content {
  id: string;
  image: string;
  created: string;
}

export default function Feed() {
  const [feed, setFeed] = useState<Content[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    // auto token is scoped for read-only access to the base, so env is not needed
    const response = await fetch(
      "https://api.airtable.com/v0/app0E2SLEMdJmXPoY/Feed?view=Grid%20view",
      {
        headers: {
          Authorization: `Bearer patLC4K1EAv8o6XaP.caa6425f1d77551923c2049b81370babea1036396149cddfe2fbde6e7619d252`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    const formattedFeed: Content[] = data.records.map(
      (record: {
        id: any;
        fields: { ID: string; Image: { url: any }[]; CreatedAt: string };
      }) => ({
        id: record.fields.ID,
        image: record.fields.Image
          ? record.fields.Image[0].url
          : "https://via.placeholder.com/600",
        created: record.fields.CreatedAt,
      })
    );

    setFeed(formattedFeed);
  }

  return (
    <section id='feed'>
      {feed.map((content) => (
        <figure key={content.id}>
          <img src={content.image} alt={content.id} />
          <figcaption>{content.created}</figcaption>
        </figure>
      ))}
    </section>
  );
}
