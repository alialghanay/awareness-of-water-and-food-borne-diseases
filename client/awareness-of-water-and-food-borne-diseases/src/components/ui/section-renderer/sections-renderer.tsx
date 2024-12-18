interface SectionsProps {
  content: string;
}

// Utility function to parse sections and their content
const parseSections = (content: string) => {
  // Split by headers (`#`) at the beginning of a line
  const sections = content.split(/(?=^# )/gm);
  return sections.map((section) => section.trim());
};

const SectionsRenderer = ({ content }: SectionsProps) => {
  const sections = parseSections(content);

  return (
    <div className="flex flex-col gap-6">
      {sections.map((section, index) => {
        const lines = section.split("\n").map((line) => line.trim());
        const header = lines.shift() || "";
        const bodyLines = lines;

        return (
          <div
            key={index}
            className={`p-6 ${index % 2 === 0 ? "bg-primary-foreground" : ""}`}
          >
            <h1
              className={`text-2xl font-extrabold text-[hsl(${
                (index * 60) % 360
              },50%,35%)] mb-4`}
            >
              {header.replace(/^# /, "")}
            </h1>
            <div className="text-base leading-relaxed">
              {bodyLines.map((line, i) => {
                if (line.startsWith("-")) {
                  // Render unordered list items
                  return (
                    <ul
                      key={i}
                      className="list-disc pl-6 mb-2 marker:text-primary"
                    >
                      <li>{line.replace(/^- /, "")}</li>
                    </ul>
                  );
                } else if (line.startsWith("##")) {
                  // Render subheader
                  return (
                    <h2 key={i} className="text-xl font-bold mb-2">
                      {line.replace(/^## /, "")}
                    </h2>
                  );
                } else {
                  // Render regular text
                  return (
                    <p key={i} className="mb-2">
                      {line}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionsRenderer;
