import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
    providedIn: 'root'
})
export class ControleLivrosService {
    private livros: Array<Livro> = [
        new Livro(1, 1, 'Livro A', 'Resumo A', ['Autor 1']),
        new Livro(2, 2, 'Livro B', 'Resumo B', ['Autor 2']),
        new Livro(3, 3, 'Livro C', 'Resumo C', ['Autor 3']),
    ];

    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const maxCodigo = this.livros.reduce((max, l) => l.codigo > max ? l.codigo : max, 0);
        livro.codigo = maxCodigo + 1;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}
