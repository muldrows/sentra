import React, { useState } from 'react';

export function Tabs({ children, defaultValue, className }) {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type.name === 'TabsList') {
          return React.cloneElement(child, { active, setActive });
        }
        if (child.type.name === 'TabsContent') {
          return child.props.value === active ? child : null;
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ children, active, setActive }) {
  return (
    <div className="flex gap-2 border-b mb-4">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { active, setActive })
      )}
    </div>
  );
}

export function TabsTrigger({ value, children, active, setActive }) {
  const isActive = active === value;
  return (
    <button
      onClick={() => setActive(value)}
      className={`px-4 py-2 font-medium ${
        isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  return <div>{children}</div>;
}
