import { CriarArmazem } from "./form-criar-armazem";
import { CriarProduto } from "./form-criar-produto";
import { DeletarArmazem } from "./form-deletar-armazem";
import { VerProduto } from "./form-editar-produto";

const Forms = {
    Criar: CriarArmazem,
    Deletar: DeletarArmazem,
    AdicionarProduto: CriarProduto,
    VisualizarProduto: VerProduto
}

export default Forms;