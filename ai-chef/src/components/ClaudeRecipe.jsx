import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  props.spinner(false);
  return (
    <section>
      <ReactMarkdown children={props.recipe} />
    </section>
  );
}
