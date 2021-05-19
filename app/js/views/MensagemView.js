class MensagemView extends View {
    // update(model:string): void {
    //     this._elemento.innerHTML = this.template(model);
    //     }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
