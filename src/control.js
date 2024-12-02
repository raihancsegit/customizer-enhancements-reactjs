import { useState, useEffect } from "@wordpress/element";

const CustomControl = ({ setting }) => {
  const [value, setValue] = useState(setting.get());

  useEffect(() => {
    const updateValue = (newValue) => {
      const sanitizedValue = Math.min(Math.max(newValue, 600), 1920);
      setValue(sanitizedValue);
      setting.set(sanitizedValue); // Update the Customizer setting
    };

    setting.bind(updateValue);
    return () => setting.unbind(updateValue);
  }, [setting]);

  const handleChange = (newValue) => {
    const sanitizedValue = Math.min(Math.max(newValue, 600), 1920);
    setValue(sanitizedValue);
    setting.set(sanitizedValue);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="range"
        min="600"
        max="1920"
        step="10"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <input
        type="number"
        min="600"
        max="1920"
        step="10"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        style={{ width: "80px" }}
      />
      <span>px</span>
    </div>
  );
};

export default CustomControl;
