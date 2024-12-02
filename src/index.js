import { render } from "@wordpress/element";
import CustomControl from "./control";

wp.customize.bind("ready", () => {
  const controlRoot = document.getElementById("react-control-root");
  if (controlRoot) {
    const setting = wp.customize("react_max_width");
    render(<CustomControl setting={setting} />, controlRoot);
  }
});
