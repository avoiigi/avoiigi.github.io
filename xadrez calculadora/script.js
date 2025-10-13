// Estado global da aplicação
let gameState = {
    problems: [],
    history: [],
    autosave: true,
    selectedPiece: null,
    currentTurn: 'our', // 'our' ou 'rival'
    board: initializeBoard()
};

// Configuração das criticidades
const criticalityConfig = {
    baixa: { points: 5, piece: 'Peão', symbol: '♟', color: 'piece-baixa' },
    media: { points: 10, piece: 'Cavalo/Bispo', symbol: '♞', color: 'piece-media' },
    alta: { points: 20, piece: 'Torre', symbol: '♜', color: 'piece-alta' },
    critica: { points: 30, piece: 'Rainha', symbol: '♛', color: 'piece-critica' },
    estrategica: { points: 50, piece: 'Rei', symbol: '♚', color: 'piece-estrategica' }
};

// Inicializar tabuleiro com todas as peças posicionadas
function initializeBoard() {
    const board = Array(8).fill(null).map(() => Array(8).fill(null));
    
    // Posicionar peças iniciais (exemplo de configuração padrão)
    // Linha 0 (topo) - Time Rival
    board[0][0] = { type: 'alta', team: 'rival', id: 'rival_torre1' };
    board[0][1] = { type: 'media', team: 'rival', id: 'rival_cavalo1' };
    board[0][2] = { type: 'media', team: 'rival', id: 'rival_bispo1' };
    board[0][3] = { type: 'critica', team: 'rival', id: 'rival_rainha' };
    board[0][4] = { type: 'estrategica', team: 'rival', id: 'rival_rei' };
    board[0][5] = { type: 'media', team: 'rival', id: 'rival_bispo2' };
    board[0][6] = { type: 'media', team: 'rival', id: 'rival_cavalo2' };
    board[0][7] = { type: 'alta', team: 'rival', id: 'rival_torre2' };
    
    // Linha 1 - Peões rivais
    for (let i = 0; i < 8; i++) {
        board[1][i] = { type: 'baixa', team: 'rival', id: `rival_peao${i + 1}` };
    }
    
    // Linha 6 - Nossos peões
    for (let i = 0; i < 8; i++) {
        board[6][i] = { type: 'baixa', team: 'our', id: `our_peao${i + 1}` };
    }
    
    // Linha 7 (base) - Nossa equipe
    board[7][0] = { type: 'alta', team: 'our', id: 'our_torre1' };
    board[7][1] = { type: 'media', team: 'our', id: 'our_cavalo1' };
    board[7][2] = { type: 'media', team: 'our', id: 'our_bispo1' };
    board[7][3] = { type: 'critica', team: 'our', id: 'our_rainha' };
    board[7][4] = { type: 'estrategica', team: 'our', id: 'our_rei' };
    board[7][5] = { type: 'media', team: 'our', id: 'our_bispo2' };
    board[7][6] = { type: 'media', team: 'our', id: 'our_cavalo2' };
    board[7][7] = { type: 'alta', team: 'our', id: 'our_torre2' };
    
    return board;
}

// Carregar dados salvos
function loadGameState() {
    try {
        const saved = localStorage.getItem('xadrez-melhoria-continua');
        if (saved) {
            const parsedState = JSON.parse(saved);
            gameState = { ...gameState, ...parsedState };
            
            // Se não há tabuleiro salvo, usar o padrão
            if (!gameState.board) {
                gameState.board = initializeBoard();
            }
        }
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

// Salvar dados
function saveGameState() {
    if (gameState.autosave) {
        try {
            localStorage.setItem('xadrez-melhoria-continua', JSON.stringify(gameState));
            showAutosaveIndicator();
        } catch (error) {
            console.error('Erro ao salvar dados:', error);
        }
    }
}

// Mostrar indicador de autosave
function showAutosaveIndicator() {
    let indicator = document.querySelector('.autosave-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'autosave-indicator';
        indicator.textContent = '💾 Salvo automaticamente';
        document.body.appendChild(indicator);
    }
    
    indicator.classList.add('show');
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 2000);
}

// Adicionar entrada ao histórico
function addToHistory(action, details = {}) {
    const entry = {
        action,
        details,
        timestamp: new Date().toISOString()
    };
    gameState.history.push(entry);
    saveGameState();
    updateHistoryDisplay();
}

// Calcular pontuação
function calculatePoints() {
    const resolved = gameState.problems.filter(p => p.status === 'resolved');
    const pending = gameState.problems.filter(p => p.status === 'pending');
    
    const ourPoints = resolved.reduce((sum, p) => sum + (criticalityConfig[p.criticality]?.points || 0), 0);
    const rivalPoints = pending.reduce((sum, p) => sum + (criticalityConfig[p.criticality]?.points || 0) * 0.5, 0);
    
    return { ourPoints, rivalPoints };
}

// Atualizar display de pontuação
function updateScoreDisplay() {
    const { ourPoints, rivalPoints } = calculatePoints();
    
    document.getElementById('ourPoints').textContent = ourPoints;
    document.getElementById('rivalPoints').textContent = rivalPoints;
    
    // Atualizar indicador de movimento
    const currentTeam = gameState.currentTurn === 'our' ? 'Nossa Equipe' : 'Time Rival';
    const availablePoints = gameState.currentTurn === 'our' ? ourPoints : rivalPoints;
    
    document.getElementById('currentTurn').textContent = currentTeam;
    document.getElementById('availablePoints').textContent = availablePoints;
}

// Renderizar tabuleiro
function renderBoard() {
    const boardElement = document.getElementById('chessBoard');
    boardElement.innerHTML = '';
    
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = `chess-square ${(row + col) % 2 === 0 ? 'light' : 'dark'}`;
            square.dataset.row = row;
            square.dataset.col = col;
            
            // Adicionar coordenadas
            if (col === 0) {
                const rowCoord = document.createElement('div');
                rowCoord.className = 'coordinate row';
                rowCoord.textContent = 8 - row;
                square.appendChild(rowCoord);
            }
            
            if (row === 7) {
                const colCoord = document.createElement('div');
                colCoord.className = 'coordinate col';
                colCoord.textContent = String.fromCharCode(97 + col);
                square.appendChild(colCoord);
            }
            
            // Adicionar peça se existir
            const piece = gameState.board[row][col];
            if (piece) {
                const pieceElement = document.createElement('div');
                pieceElement.className = `chess-piece ${criticalityConfig[piece.type].color}`;
                pieceElement.textContent = criticalityConfig[piece.type].symbol;
                pieceElement.dataset.pieceId = piece.id;
                pieceElement.dataset.team = piece.team;
                pieceElement.dataset.type = piece.type;
                pieceElement.title = `${criticalityConfig[piece.type].piece} (${criticalityConfig[piece.type].points} pts)`;
                
                // Adicionar eventos de clique
                pieceElement.addEventListener('click', () => selectPiece(row, col));
                
                square.appendChild(pieceElement);
            }
            
            // Adicionar evento de clique no quadrado
            square.addEventListener('click', () => handleSquareClick(row, col));
            
            boardElement.appendChild(square);
        }
    }
    
    updateMovableSquares();
}

// Selecionar peça
function selectPiece(row, col) {
    const piece = gameState.board[row][col];
    if (!piece) return;
    
    // Verificar se é a vez do time da peça
    if (piece.team !== gameState.currentTurn) {
        alert(`É a vez do ${gameState.currentTurn === 'our' ? 'nosso time' : 'time rival'}!`);
        return;
    }
    
    // Verificar se o time tem pontos suficientes para mover esta peça
    const { ourPoints, rivalPoints } = calculatePoints();
    const availablePoints = piece.team === 'our' ? ourPoints : rivalPoints;
    const pieceValue = criticalityConfig[piece.type].points;
    
    if (availablePoints < pieceValue) {
        alert(`Pontos insuficientes! Você tem ${availablePoints} pontos, mas precisa de ${pieceValue} para mover esta peça.`);
        return;
    }
    
    // Limpar seleção anterior
    clearSelection();
    
    // Selecionar nova peça
    gameState.selectedPiece = { row, col, piece };
    
    // Destacar quadrado selecionado
    const square = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    square.classList.add('selected');
    
    // Destacar movimentos possíveis
    highlightPossibleMoves(row, col, piece);
}

// Limpar seleção
function clearSelection() {
    gameState.selectedPiece = null;
    document.querySelectorAll('.chess-square').forEach(square => {
        square.classList.remove('selected', 'highlighted');
    });
}

// Destacar movimentos possíveis
function highlightPossibleMoves(row, col, piece) {
    // Para simplicidade, permitir movimento para qualquer quadrado vazio
    // Em uma implementação completa, isso seguiria as regras do xadrez
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            if (!gameState.board[r][c] || (gameState.board[r][c].team !== piece.team)) {
                const square = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
                square.classList.add('highlighted');
            }
        }
    }
}

// Lidar com clique no quadrado
function handleSquareClick(row, col) {
    if (!gameState.selectedPiece) return;
    
    const targetSquare = gameState.board[row][col];
    const selectedPiece = gameState.selectedPiece;
    
    // Não permitir mover para quadrado com peça do mesmo time
    if (targetSquare && targetSquare.team === selectedPiece.piece.team) {
        return;
    }
    
    // Mover peça
    movePiece(selectedPiece.row, selectedPiece.col, row, col);
}

// Mover peça
function movePiece(fromRow, fromCol, toRow, toCol) {
    const piece = gameState.board[fromRow][fromCol];
    const targetPiece = gameState.board[toRow][toCol];
    
    // Registrar movimento no histórico
    const moveDetails = {
        piece: piece.id,
        from: `${String.fromCharCode(97 + fromCol)}${8 - fromRow}`,
        to: `${String.fromCharCode(97 + toCol)}${8 - toRow}`,
        captured: targetPiece ? targetPiece.id : null
    };
    
    // Executar movimento
    gameState.board[toRow][toCol] = piece;
    gameState.board[fromRow][fromCol] = null;
    
    // Adicionar ao histórico
    addToHistory('move', moveDetails);
    
    // Limpar seleção
    clearSelection();
    
    // Alternar turno
    gameState.currentTurn = gameState.currentTurn === 'our' ? 'rival' : 'our';
    
    // Atualizar displays
    renderBoard();
    updateScoreDisplay();
    saveGameState();
}

// Atualizar quadrados movíveis
function updateMovableSquares() {
    const { ourPoints, rivalPoints } = calculatePoints();
    const availablePoints = gameState.currentTurn === 'our' ? ourPoints : rivalPoints;
    
    document.querySelectorAll('.chess-piece').forEach(pieceElement => {
        const team = pieceElement.dataset.team;
        const type = pieceElement.dataset.type;
        const pieceValue = criticalityConfig[type].points;
        
        if (team === gameState.currentTurn && availablePoints >= pieceValue) {
            pieceElement.parentElement.classList.add('movable');
        } else {
            pieceElement.parentElement.classList.remove('movable');
        }
    });
}

// Adicionar problema
function addProblem(event) {
    event.preventDefault();
    
    const description = document.getElementById('description').value.trim();
    const criticality = document.getElementById('criticality').value;
    
    if (!description || !criticality) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    const problem = {
        id: Date.now(),
        description,
        criticality,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    gameState.problems.push(problem);
    addToHistory('add_problem', { problem: problem.id, description, criticality });
    
    // Limpar formulário
    document.getElementById('problemForm').reset();
    
    // Atualizar displays
    updateProblemsDisplay();
    updateScoreDisplay();
    renderBoard();
    saveGameState();
}

// Alternar status do problema
function toggleProblemStatus(problemId) {
    const problem = gameState.problems.find(p => p.id === problemId);
    if (!problem) return;
    
    const oldStatus = problem.status;
    problem.status = problem.status === 'pending' ? 'resolved' : 'pending';
    
    addToHistory('toggle_status', { 
        problem: problemId, 
        from: oldStatus, 
        to: problem.status 
    });
    
    updateProblemsDisplay();
    updateScoreDisplay();
    renderBoard();
    saveGameState();
}

// Remover problema
function removeProblem(problemId) {
    const problemIndex = gameState.problems.findIndex(p => p.id === problemId);
    if (problemIndex === -1) return;
    
    const problem = gameState.problems[problemIndex];
    gameState.problems.splice(problemIndex, 1);
    
    addToHistory('remove_problem', { problem: problemId, description: problem.description });
    
    updateProblemsDisplay();
    updateScoreDisplay();
    renderBoard();
    saveGameState();
}

// Atualizar display de problemas
function updateProblemsDisplay() {
    const problemsList = document.getElementById('problemsList');
    const problemCount = document.getElementById('problemCount');
    
    problemCount.textContent = gameState.problems.length;
    
    if (gameState.problems.length === 0) {
        problemsList.innerHTML = '<div class="empty-state">Nenhum problema cadastrado ainda</div>';
        return;
    }
    
    problemsList.innerHTML = gameState.problems.map(problem => {
        const config = criticalityConfig[problem.criticality];
        return `
            <div class="problem-item slide-in">
                <div class="problem-icon ${config.color}">
                    ${config.symbol}
                </div>
                <div class="problem-content">
                    <div class="problem-title">${problem.description}</div>
                    <div class="problem-meta">${config.piece} • ${config.points} pontos</div>
                </div>
                <div class="problem-actions">
                    <span class="badge ${problem.status === 'resolved' ? 'badge-resolved' : 'badge-pending'}">
                        ${problem.status === 'resolved' ? 'Resolvido' : 'Pendente'}
                    </span>
                    <button class="btn btn-outline" onclick="toggleProblemStatus(${problem.id})">
                        ${problem.status === 'resolved' ? 'Reabrir' : 'Resolver'}
                    </button>
                    <button class="btn btn-outline" onclick="removeProblem(${problem.id})" style="color: #E74C3C;">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Resetar tabuleiro
function resetBoard() {
    if (confirm('Tem certeza que deseja resetar o tabuleiro para a posição inicial?')) {
        gameState.board = initializeBoard();
        gameState.selectedPiece = null;
        gameState.currentTurn = 'our';
        
        addToHistory('reset_board');
        
        renderBoard();
        updateScoreDisplay();
        saveGameState();
    }
}

// Alternar autosave
function toggleAutosave() {
    gameState.autosave = !gameState.autosave;
    
    const icon = document.getElementById('autosaveIcon');
    const text = document.getElementById('autosaveText');
    
    if (gameState.autosave) {
        icon.textContent = '💾';
        text.textContent = 'Autosave: ON';
    } else {
        icon.textContent = '💤';
        text.textContent = 'Autosave: OFF';
    }
    
    saveGameState();
}

// Exportar para Excel
function exportToExcel() {
    try {
        // Preparar dados para exportação
        const problemsData = gameState.problems.map(problem => ({
            'ID': problem.id,
            'Descrição': problem.description,
            'Criticidade': problem.criticality,
            'Pontos': criticalityConfig[problem.criticality].points,
            'Status': problem.status,
            'Criado em': new Date(problem.createdAt).toLocaleString('pt-BR')
        }));
        
        const historyData = gameState.history.map(entry => ({
            'Ação': entry.action,
            'Detalhes': JSON.stringify(entry.details),
            'Data/Hora': new Date(entry.timestamp).toLocaleString('pt-BR')
        }));
        
        const { ourPoints, rivalPoints } = calculatePoints();
        const summaryData = [
            { 'Métrica': 'Pontos Nossa Equipe', 'Valor': ourPoints },
            { 'Métrica': 'Pontos Time Rival', 'Valor': rivalPoints },
            { 'Métrica': 'Total de Problemas', 'Valor': gameState.problems.length },
            { 'Métrica': 'Problemas Resolvidos', 'Valor': gameState.problems.filter(p => p.status === 'resolved').length },
            { 'Métrica': 'Problemas Pendentes', 'Valor': gameState.problems.filter(p => p.status === 'pending').length }
        ];
        
        // Criar workbook
        const wb = XLSX.utils.book_new();
        
        // Adicionar planilhas
        const wsProblems = XLSX.utils.json_to_sheet(problemsData);
        const wsHistory = XLSX.utils.json_to_sheet(historyData);
        const wsSummary = XLSX.utils.json_to_sheet(summaryData);
        
        XLSX.utils.book_append_sheet(wb, wsProblems, 'Problemas');
        XLSX.utils.book_append_sheet(wb, wsHistory, 'Histórico');
        XLSX.utils.book_append_sheet(wb, wsSummary, 'Resumo');
        
        // Salvar arquivo
        const fileName = `xadrez-melhoria-continua-${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, fileName);
        
        addToHistory('export_excel', { fileName });
        
    } catch (error) {
        console.error('Erro ao exportar para Excel:', error);
        alert('Erro ao exportar dados para Excel. Verifique o console para mais detalhes.');
    }
}

// Mostrar aba
function showTab(tabName) {
    // Remover classe active de todos os botões e conteúdos
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Adicionar classe active ao botão e conteúdo selecionados
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
    
    // Atualizar conteúdo específico da aba
    if (tabName === 'pecas') {
        updatePiecesDisplay();
    } else if (tabName === 'historico') {
        updateHistoryDisplay();
    }
}

// Atualizar display de peças
function updatePiecesDisplay() {
    const piecesGrid = document.getElementById('piecesGrid');
    
    piecesGrid.innerHTML = Object.entries(criticalityConfig).map(([key, config]) => `
        <div class="piece-info">
            <div class="piece-info-icon ${config.color}">
                ${config.symbol}
            </div>
            <div class="piece-info-content">
                <h4>${config.piece}</h4>
                <p>${key.charAt(0).toUpperCase() + key.slice(1)} criticidade • ${config.points} pontos</p>
            </div>
        </div>
    `).join('');
}

// Atualizar display de histórico
function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    
    if (gameState.history.length === 0) {
        historyList.innerHTML = '<div class="empty-state">Nenhuma ação registrada ainda</div>';
        return;
    }
    
    const recentHistory = gameState.history.slice(-10).reverse();
    
    historyList.innerHTML = recentHistory.map(entry => {
        let actionText = '';
        switch (entry.action) {
            case 'add_problem':
                actionText = 'Problema adicionado';
                break;
            case 'remove_problem':
                actionText = 'Problema removido';
                break;
            case 'toggle_status':
                actionText = 'Status alterado';
                break;
            case 'move':
                actionText = 'Peça movida';
                break;
            case 'reset_board':
                actionText = 'Tabuleiro resetado';
                break;
            case 'export_excel':
                actionText = 'Dados exportados para Excel';
                break;
            default:
                actionText = entry.action;
        }
        
        return `
            <div class="history-item">
                <div class="history-action">${actionText}</div>
                <div class="history-time">${new Date(entry.timestamp).toLocaleString('pt-BR')}</div>
            </div>
        `;
    }).join('');
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadGameState();
    renderBoard();
    updateScoreDisplay();
    updateProblemsDisplay();
    updatePiecesDisplay();
    updateHistoryDisplay();
    
    // Configurar autosave inicial
    const autosaveIcon = document.getElementById('autosaveIcon');
    const autosaveText = document.getElementById('autosaveText');
    
    if (gameState.autosave) {
        autosaveIcon.textContent = '💾';
        autosaveText.textContent = 'Autosave: ON';
    } else {
        autosaveIcon.textContent = '💤';
        autosaveText.textContent = 'Autosave: OFF';
    }
    
    // Autosave periódico (a cada 30 segundos)
    setInterval(() => {
        if (gameState.autosave) {
            saveGameState();
        }
    }, 30000);
});

