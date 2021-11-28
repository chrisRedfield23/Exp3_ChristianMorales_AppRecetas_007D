import {browser, element, by} from 'protractor';

describe('Mi Test', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");
    });


    //creación de prueba 1
    it("El page 1 se muestra por defecto", ()=>{
        expect(element(by.css(".ion-title ion-title")).getText()).toContain("Cocinero Universitario");

    }); //fin de prueba 1

    //creación de prueba 2
    it("El page 2 se muestra por defecto", ()=>{
        expect(element(by.css(".titulo ion-card-title")).getText()).toContain("TARTALETA DE FRUTAS");

    });//fin de prueba 2

});