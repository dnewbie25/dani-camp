import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section>
      <ReactMarkdown children={props.recipe} />
    </section>
  );
}
