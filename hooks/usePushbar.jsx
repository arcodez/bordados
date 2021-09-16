import { useState, useEffect } from "react";

export function usePushbar() {
  const [pushbar, setPushbar] = useState({});

  /* Pushbar Js  */
  useEffect(() => {
    class Pushbar {
      constructor(e = { overlay: !0, blur: !1 }) {
        if (
          (this.activeId,
          this.activeElement,
          this.overlayElement,
          e.overlay &&
            ((this.overlayElement = document.createElement("div")),
            this.overlayElement.classList.add("pushbar_overlay"),
            document.querySelector("body").appendChild(this.overlayElement)),
          e.blur)
        ) {
          const e = document.querySelector(".pushbar_main_content");
          e && e.classList.add("pushbar_blur");
        }
        this.bindEvents();
      }
      emitOpening() {
        const e = new CustomEvent("pushbar_opening", {
          bubbles: !0,
          detail: { element: this.activeElement, id: this.activeId },
        });
        this.activeElement.dispatchEvent(e);
      }
      emitClosing() {
        const e = new CustomEvent("pushbar_closing", {
          bubbles: !0,
          detail: { element: this.activeElement, id: this.activeId },
        });
        this.activeElement.dispatchEvent(e);
      }
      handleOpenEvent(e) {
        e.preventDefault();
        const t = e.currentTarget.getAttribute("data-pushbar-target");
        this.open(t);
      }
      handleCloseEvent(e) {
        e.preventDefault(), this.close();
      }
      handleKeyEvent(e) {
        27 === e.keyCode && this.close();
      }
      bindEvents() {
        const e = document.querySelectorAll("[data-pushbar-target]"),
          t = document.querySelectorAll("[data-pushbar-close]");
        e.forEach((e) =>
          e.addEventListener("click", (e) => this.handleOpenEvent(e), !1)
        ),
          t.forEach((e) =>
            e.addEventListener("click", (e) => this.handleCloseEvent(e), !1)
          ),
          this.overlayElement &&
            this.overlayElement.addEventListener(
              "click",
              (e) => this.handleCloseEvent(e),
              !1
            ),
          document.addEventListener("keyup", (e) => this.handleKeyEvent(e));
      }
      open(e) {
        if (this.activeId === String(e) || !e) return;
        if (
          (this.activeId && this.activeId !== String(e) && this.close(),
          (this.activeId = e),
          (this.activeElement = document.querySelector(
            `[data-pushbar-id="${this.activeId}"]`
          )),
          !this.activeElement)
        )
          return;
        this.emitOpening(), this.activeElement.classList.add("opened");
        const t = document.querySelector("html");
        t.classList.add("pushbar_locked"), t.setAttribute("pushbar", e);
      }
      close() {
        if (!this.activeId) return;
        this.emitClosing(), this.activeElement.classList.remove("opened");
        const e = document.querySelector("html");
        e.classList.remove("pushbar_locked"),
          e.removeAttribute("pushbar"),
          (this.activeId = null),
          (this.activeElement = null);
      }
    }
    setPushbar(
      new Pushbar({
        // blur: true,
        overlay: true,
      })
    );
  }, []);

  return { pushbar };
}
