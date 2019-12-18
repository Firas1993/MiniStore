import React from "react";

export default function InputFilter({ item, bool }) {
  return (
    <div class="custom-control custom-checkbox my-1 mr-sm-2">
      <input type="checkbox" class="custom-control-input" checked={bool} />
      <label class="custom-control-label" for="customControlInline">
        {item}
      </label>
    </div>
  );
}
