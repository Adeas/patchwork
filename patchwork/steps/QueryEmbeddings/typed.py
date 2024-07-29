from typing_extensions import Annotated, Any, Dict, List, Optional

from patchwork.common.utils.step_typing import StepTypeConfig


class QueryEmbeddingsInputs(TypedDict):
    embedding_name: str
    texts: List[str]
    top_k: Optional[Annotated[int, StepTypeConfig(is_config=True)]] = None
    token_limit: Optional[Annotated[int, StepTypeConfig(is_config=True)]] = None


class QueryEmbeddingsOutputs(TypedDict):
    embedding_results: List[Dict[str, Any]]
