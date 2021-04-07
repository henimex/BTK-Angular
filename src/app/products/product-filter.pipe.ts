import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string ): Product[] {
    //filterText = filterText ? filterText.toLocaleLowerCase():"null"

    return filterText ? value.filter((p:Product)=>p.name?.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) != -1):value;
    //return filterText ? value.filter((p: Product) => p.name?.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) != -1) : value;
  }

}
