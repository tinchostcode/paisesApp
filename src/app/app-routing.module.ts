import { NgModule } from "@angular/core"; // 1 primero para importar
import { Routes,RouterModule } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";


const routes: Routes = [  //debemos importar Routes
    {
    path:'',  
    component:PorPaisComponent,
    pathMatch:'full'
    },

    {
        path:'region',
        component:PorRegionComponent
        
    },

    {
        path:'capital',
        component:PorCapitalComponent
       
    },
    {
        path:'pais/:id',
        component:VerPaisComponent
    },
    {
        path:'**',
        redirectTo:''
    }
    
];




@NgModule({ //decorador aca definimos los import y export 

imports:[
RouterModule.forRoot(routes)
],


exports:[
RouterModule
]

})

export class AppRoutingModule{} // 1