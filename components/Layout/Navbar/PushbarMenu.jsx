import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

export function PushbarMenu() {
  const [pushbar, setPushbar] = useState({});

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
        blur: true,
        overlay: true,
      })
    );
  }, []);

  return (
    <Fragment>
      <Link href="/">
        <i className="fas fa-tshirt logo ml"></i>
      </Link>

      <i
        className="fas fa-bars icons ml-icon ml"
        onClick={() => {
          pushbar.open("pushbar-menu");
        }}
      ></i>

      <div
        data-pushbar-id="pushbar-menu"
        className="pushbar-menu"
        data-pushbar-direction="right"
      >
        <button data-pushbar-close>
          <i className="fas fa-times"></i>
        </button>

        <a className="activo">Inicio</a>
        <a>Bordados</a>
        <a>Estampados</a>

        <i className="fas fa-tshirt logo ml"></i>

        <a>Nosotros</a>
        <a>F. A. Q</a>
        <a>Contacto</a>

        <div className="icons">
          <i className="fas fa-shopping-cart"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <style jsx>{`
        .activo,
        a:hover {
          background: var(--azul);
          padding: 10px;
          border-radius: 20px;
        }

        .logo {
          font-size: 30px;
          margin: 0 20px;
        }

        .icons {
          font-size: 25px;
        }

        .ml {
          display: none;
        }

        .ml-icon {
          display: none;
          padding: 5px;
          border-radius: 5px;
        }

        .ml-icon:hover {
          background: var(--azul);
          animation: 2s rotate;
        }

        .pushbar-menu {
          background: var(--noche-clara);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @-webkit-keyframes rotate {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
          }
        }

        @media screen and (max-width: 800px) {
          .ml {
            display: inherit;
          }
        }
      `}</style>
    </Fragment>
  );
}
