/**
 * Creates proper HOC name
 * @param childComponent {React.Component|React.PureComponent}
 * @param name {string} - HOC name
 * @returns {string}
 */
export const createHocName = (childComponent, name) => {
  const childName = childComponent.displayName || childComponent.name || 'Component';
  return `${name}(${childName})`;
};
