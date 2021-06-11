export function logarTempoDeExecucao(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            const retorno = metodoOriginal.aplly(this, args);

            return retorno;
        }

        return descriptor;
    }
}