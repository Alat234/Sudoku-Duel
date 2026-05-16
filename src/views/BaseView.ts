export abstract class BaseView {
  protected root: HTMLElement;

  constructor(rootId = "app") {
    const root = document.getElementById(rootId);

    if (!root) {
      throw new Error("Root element not found.");
    }

    this.root = root;
  }

  protected setHTML(html: string): void {
    this.root.innerHTML = html;
  }

  clear(): void {
    this.root.innerHTML = "";
  }
}
