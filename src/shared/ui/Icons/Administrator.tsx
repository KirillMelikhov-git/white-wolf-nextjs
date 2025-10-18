export function Administrator() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      {/* Компьютер/монитор */}
      <rect
        x="64"
        y="96"
        width="384"
        height="256"
        rx="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="32"
      />
      {/* Экран */}
      <rect
        x="80"
        y="112"
        width="352"
        height="208"
        rx="8"
        fill="black"
        opacity="0.3"
      />
      {/* Подставка */}
      <rect x="192" y="352" width="128" height="32" fill="currentColor" />
      {/* Клавиатура */}
      <rect
        x="128"
        y="384"
        width="256"
        height="32"
        rx="4"
        fill="currentColor"
      />
      {/* Кнопки */}
      <circle cx="160" cy="400" r="4" fill="currentColor" />
      <circle cx="192" cy="400" r="4" fill="currentColor" />
      <circle cx="224" cy="400" r="4" fill="currentColor" />
      <circle cx="256" cy="400" r="4" fill="currentColor" />
      <circle cx="288" cy="400" r="4" fill="currentColor" />
      <circle cx="320" cy="400" r="4" fill="currentColor" />
      <circle cx="352" cy="400" r="4" fill="currentColor" />
    </svg>
  );
}
