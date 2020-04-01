/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e75197f06e8563f32296087
*
* You will get 10% discount for each one of your friends
* 
*/
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CategoriaService } from '../../services/categoria.service';
// Import Models
import { Categoria } from '../../domain/site_compra_venda_db/categoria';

// START - USED SERVICES
/**
* CategoriaService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CategoriaService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Categoria
 * @class CategoriaListComponent
 */
@Component({
    selector: 'app-categoria-list',
    templateUrl: './categoria-list.component.html',
    styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
    list: Categoria[];
    search: any = {};
    idSelected: string;
    constructor(
        private categoriaService: CategoriaService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.categoriaService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Categoria to remove
     *
     * @param {string} id Id of the Categoria to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Categoria
     */
    deleteItem() {
        this.categoriaService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
