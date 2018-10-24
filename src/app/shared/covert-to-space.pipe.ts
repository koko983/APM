import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "covertToSpaces"
})
export class ConvertToSpacePipe implements PipeTransform
{
    transform(value: any, letter: string): string {
        return value.replace(letter, " ");
    }
}