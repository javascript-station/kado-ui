export const getBrowserScrollbarWith = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';

  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
}

export const selectAccessibleChildren = (parent: HTMLElement) => {
  const children = Array.from(
    parent.querySelectorAll<HTMLElement>(`
      a[href],
      area[href],
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      iframe,
      object,
      embed,
      [tabindex]:not([tabindex="-1"]),
      [contenteditable="true"]
    `)
  );

  return children;
}