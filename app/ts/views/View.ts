export abstract class View<T>{

        protected _elemento: JQuery;
        private _escapar: boolean;

   
       constructor(seletor: string, escapar?: boolean) {
           this._elemento = $(seletor);
           this._escapar = escapar;
       }
   
       update(model: T){
           let template = this.template(model);

           if(this._escapar)
              template = template.replace(/<script>[\s\$]*?<\/script>/g,'');
           this._elemento.html(template);
       }
   
       abstract template(model: T): string;
   }





