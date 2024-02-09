export type PrimaryButtonProps = {
    title: string;
    url: string;
};

export type Post = {
    _id: string;
    title?: string;
    slug?: {
        current: string;
    };
    body: {
        _type: "blockContent";
        styles: [];
        listStyle: [];
        children: Array<{
          _type: "paragraph" & { text: string };
        } | {
          _type: "heading" & { text: string; level: number }; // Add if you use headings
        } | {
          _type: "image" & { asset: { _ref: string } };
        }>;
      };
}