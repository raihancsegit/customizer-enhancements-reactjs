wp.customize.bind("ready", function () {
  const { useState } = wp.element;

  const MaxWidthControl = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleSliderChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange(newValue);
    };

    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange(newValue);
    };

    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="range"
          min="600"
          max="1920"
          step="10"
          value={inputValue}
          onChange={handleSliderChange}
        />
        <input
          type="number"
          min="600"
          max="1920"
          step="10"
          value={inputValue}
          style={{ width: "80px" }}
          onChange={handleInputChange}
        />
        <span>px</span>
      </div>
    );
  };

  wp.customize.control("ce_max_site_width_control", function (control) {
    const container = control.container[0];
    wp.element.render(
      <MaxWidthControl
        value={control.setting.get()}
        onChange={(newValue) => control.setting.set(parseInt(newValue, 10))}
      />,
      container
    );
  });
});
