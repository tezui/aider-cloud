from fastapi import APIRouter, Depends, HTTPException, WebSocket, WebSocketDisconnect
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.schemas.chat import ChatMessageCreate, ChatMessage
from app.services.aider_integration import AiderService
from app.services.auth import get_current_user

router = APIRouter()
aider_service = AiderService()

@router.websocket("/ws/{project_id}")
async def websocket_endpoint(
    websocket: WebSocket,
    project_id: int,
    db: Session = Depends(get_db)
):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            response = await aider_service.process_message(data, project_id)
            await websocket.send_text(response)
    except WebSocketDisconnect:
        await websocket.close()

@router.get("/history/{project_id}", response_model=List[ChatMessage])
def get_chat_history(
    project_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    # Implement chat history retrieval
    pass