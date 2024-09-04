<?php
// Defina os dados que você quer retornar
$resultado = [
    'success' => true, // ou false, dependendo da lógica
    'message' => 'A operação foi bem-sucedida.' // ou uma mensagem de erro
];

// Codifique o array como JSON
header('Content-Type: application/json');
echo json_encode($resultado);
?>
