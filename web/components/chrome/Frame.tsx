/** The blue picture-frame around the viewport (desktop only). Its glow reacts to scroll and clicks. */
export function Frame() {
  return (
    <div aria-hidden="true" className="hw-frame max-md:hidden">
      <span className="hw-frame-ambient top" />
      <span className="hw-frame-ambient right" />
      <span className="hw-frame-ambient bottom" />
      <span className="hw-frame-ambient left" />
      <span className="hw-frame-click" />
      <span className="hw-frame-scroll" />
    </div>
  );
}
