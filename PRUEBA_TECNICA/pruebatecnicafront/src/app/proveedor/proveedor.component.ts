import { Component } from '@angular/core';
import { Proveedor } from '../pruebatenica-datos-modelo/proveedor.model';
import { MOCKPROVEEDORES } from '../pruebatecnica-mock/proveedores.mock';
import { ProveedorServiceService } from '../proveedor-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './proveedor.component.html',
    styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
    title = 'prueba tecnica - proveedores';

    proveedor: Proveedor;
    newProveedor: boolean;

    public proveedores: Proveedor[];
    displayDialog: boolean;

    showDialogToAdd() {
        this.newProveedor = true;
        this.proveedor;
        this.displayDialog = true;
    }


    ciudad: any[];

    clonedProveedores: { [s: string]: any; } = {};

    constructor(private proveedorservice:ProveedorServiceService) { }

    ngOnInit() {
        this.invocarServicio();

        this.proveedor = new Proveedor();
        
        this.ciudad = [
            { label: 'bogota', value: 'bogota' },
            { label: 'medellin', value: 'medellin' },
            { label: 'pasto', value: 'pasto' },
            { label: 'cali', value: 'cali' },
            { label: 'risaralda', value: 'risaralda' },
            { label: 'pereira', value: 'pereira' },
            { label: 'santa marta', value: 'santa marta' },
            { label: 'cucuta', value: 'cucuta' },
            { label: 'caldas', value: 'caldas' },
            { label: 'choco', value: 'choco' }
        ];
    }

    save() {
        let proveedores = [...this.proveedores];
        proveedores.push(this.proveedor);
        this.proveedores = proveedores;
        this.proveedor = new Proveedor();
    }

    functionToCloseDialog() {
        this.displayDialog = false; // closes/hides the dialog box
    }

    onRowEditInit(proveedor: any) {

        this.clonedProveedores[proveedor.id] = { ...proveedor };
    }

    onRowEditSave(proveedor: any) {
        delete this.clonedProveedores[proveedor.id];
    }

    onRowDelete(indx) {
        this.proveedores.splice(indx, 1);
        this.proveedores = [...this.proveedores];
    }

    onRowEditCancel(car: any, index: number) {
        this.proveedores[index] = this.clonedProveedores[car.vin];
        delete this.clonedProveedores[car.vin];
    }

    invocarServicio() {
        this.proveedorservice
            .getProveedores()
            .then(response => {
                if (response !== null && response !== undefined && response !== "") {
                   this.proveedores= response;
                } else {
                   this.proveedores = MOCKPROVEEDORES.data.info;
                }
        })
        .catch(error => {
                console.log("ocurrio un error al consumir el servicio"+ error);
        });
    }
}