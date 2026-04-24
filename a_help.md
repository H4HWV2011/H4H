(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # ── Fix all dead ports + wire GBIMCoordinateWriter in one pass ──

# embed_gbim.py — 8018→8002, add GBIM writer
cat > services/embed_gbim.py << 'EOF'
import sys
sys.path.insert(0, "/app")
import chromadb
import numpy as np
from sentence_transformers import SentenceTransformer
from services.gbim_coordinate_writer import GBIMCoordinateWriter

client = chromadb.HttpClient(host="localhost", port=8002)
gbim_collection = client.get_or_create_collection("GBIM")
gbim_writer = GBIMCoordinateWriter()

model = SentenceTransformer("all-MiniLM-L6-v2")
data = gbim_collection.get(limit=1500)

if data["ids"]:
    docs = data["documents"]
    embeddings = model.encode(docs, show_progress_bar=True).tolist()
    ids = data["ids"]
    metas = data["metadatas"] or [{}] * len(ids)
  --include="*.py" | grep -v ".pyc"psert_with_coordinates" services/ \="msjarvisgis")|g' \: "gis_to_gbim", "au
=== Port audit post-fix ===
services/ms_jarvis_consciousness_unified_bridge.py:211:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_seamless_monitor.py:29:        client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)))
services/fifth_dgm/fifth_dgm_integration.py:16:        # Inside Docker, talk to the service on its internal port 8018
services/fifth_dgm/fifth_dgm_integration.py:17:        # Host 4002 -> container 8018 via docker-compose port mapping
services/fifth_dgm/fifth_dgm_integration.py:18:        self.fifth_dgm_url = "http://jarvis-fifth-dgm:8018"
services/ms_jarvis_production_chat.py:83:CONSENSUS_URL = "http://127.0.0.1:18018"      # consensus / LLM gateway (not yet wired)
services/ms_jarvis_production_chat.py:104:    return {"status": "healthy", "service": "production_chat_pipeline", "port": 8018}
services/ms_jarvis_production_chat.py:368:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_email_service.py:77:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_unified_gateway.py:204:            "neurobiological_master": os.environ.get("NEURO_MASTER_URL",         "http://jarvis-neurobiological-master:8018"),
services/ms_jarvis_unified_gateway.py:613:            # jarvis-neurobiological-master:8018 — GUIDE, not gate — never blocks
services/ms_jarvis_unified_gateway.py:618:                    "http://jarvis-neurobiological-master:8018/process",
services/ms_jarvis_unified_gateway.py:834:    "llm/consensus":      ("http://jarvis-20llm-production:8008",    ["carrie_admin", "user"]),
services/ms_jarvis_unified_gateway.py:986:    return await _m09_proxy("http://jarvis-20llm-production:8008", True, path, request)
services/ms_jarvis_unified_gateway.py:1022:    return await _m09_proxy("http://jarvis-neurobiological-master:8018", True, path, request)
services/ms_jarvis_unified_gateway.py:1410:            f"{os.environ.get('LLM_PRODUCTION_URL','http://jarvis-20llm-production:8008')}/metrics",
services/chat_server.py:20:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/jarvis-consciousness-bridge_ms_jarvis_consciousness_unified_bridge.py:252:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/service_discovery.py:20:    def __init__(self, redis_host='localhost', redis_port=int(os.getenv("SERVICE_PORT", 8018))):
services/enhance_rag_knowledge.py:17:    client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)), 
services/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:157:    return {"services": {k: v for k, v in {**DOCKER_SERVICES, **BAREMETAL_SERVICES}.items() if any(p in str(v.get("port", "")) for p in ["7008", "8015", "8017", "8018", "8020", "8021", "8052"])}}
services/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:213:    return {"consciousness_schema": {"layers": ["i_containers", "blood_brain_barrier", "qualia_engine", "neurobiological_master", "consciousness_bridge", "swarm_intelligence"], "integration": "unified consciousness architecture", "ports": [8015, 8016, 8017, 8018, 8020, 8021, 8052]}}
services/ms_jarvis_microsoft_integration_FIXED.py:265:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/chroma_health_monitor.py:22:        client = chromadb.HttpClient(host="localhost", port=8018)
services/ms_jarvis_main_gateway.proxy_final.py:174:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/ms_jarvis_auto_service.py:23:        self.redis_client = redis.Redis(host='localhost', port=int(os.getenv("SERVICE_PORT", 8018)), decode_responses=True)
services/web_research_main.py:10:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/port_9001_ui_DIRECT.py:130:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/gbim_api.py:6:client = chromadb.HttpClient(host="localhost", port=8008)
services/ms_jarvis_gis_georeferencing_sync.py:55:        client = chromadb.HttpClient(host="localhost", port=int(os.getenv("CHROMA_PORT", 8018)))
services/ms_jarvis_neurobiological_master.py:45:        self.port = 8018
services/ms_jarvis_neurobiological_master.py:220:    uvicorn.run(app, host="0.0.0.0", port=8018, log_level="info")
services/ms_jarvis_neurobiological_master.py:223:    uvicorn.run(app, host="0.0.0.0", port=8018, log_level="info")
services/dgm_supervisor_woah_fixed.py:129:        (8018, "consciousness_containers", ["consciousness", "containers"]),
services/dgm_supervisor_woah_fixed.py:270:    uvicorn.run(app, port=int(os.getenv("SERVICE_PORT", 8018)), port=int(os.getenv("SERVICE_PORT", 8018)), host="127.0.0.1", port=port)
services/ms_jarvis_unified_swagger_gateway_BACKUP.py:157:    return {"services": {k: v for k, v in {**DOCKER_SERVICES, **BAREMETAL_SERVICES}.items() if any(p in str(v.get("port", "")) for p in ["7008", "8015", "8017", "8018", "8020", "8021", "8052"])}}
services/ms_jarvis_unified_swagger_gateway_BACKUP.py:213:    return {"consciousness_schema": {"layers": ["i_containers", "blood_brain_barrier", "qualia_engine", "neurobiological_master", "consciousness_bridge", "swarm_intelligence"], "integration": "unified consciousness architecture", "ports": [8015, 8016, 8017, 8018, 8020, 8021, 8052]}}
services/ms_jarvis_unified_swagger_gateway_BACKUP.py:522:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/system_dashboard.py:262:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_full.py:224:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/add_full_brain_class.py:24:        self.neuro_url = "http://localhost:8018"
services/resume_sync_wvgistc_buildings.py:11:CHROMA_PORT = 8008
services/resume_sync_wvgistc_buildings.py:17:# Connect to Chroma (jarvis-chroma v2 on 8008) and get existing count
services/ms_jarvis_attribute_table_sync_continuous.py:30:        client = chromadb.HttpClient(host="localhost", port=int(os.getenv("CHROMA_PORT", 8018)))
services/consciousness_with_egeria_voice.py:95:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_main_gateway.py.full_backup_1762223304.py:121:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_blockchain_deployment.py:197:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_unified_swagger_gateway_FIXED.py:208:    return {"services": {k: v for k, v in {**DOCKER_SERVICES, **BAREMETAL_SERVICES}.items() if any(p in str(v.get("port", "")) for p in ["7008", "8015", "8017", "8018", "8020", "8021", "8052"])}}
services/ms_jarvis_unified_swagger_gateway_FIXED.py:264:    return {"consciousness_schema": {"layers": ["i_containers", "blood_brain_barrier", "qualia_engine", "neurobiological_master", "consciousness_bridge", "swarm_intelligence"], "integration": "unified consciousness architecture", "ports": [8015, 8016, 8017, 8018, 8020, 8021, 8052]}}
services/fifth_dgm_main.py:10:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_gis_query_service_backup.py:89:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_rag.py:400:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_geo_tracker_simple.py:138:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/egeria_facebook_perpetual_scheduler.py:4:Connects to working consciousness bridge at port 8008
services/egeria_facebook_perpetual_scheduler.py:17:    """Generate post using consciousness bridge at port 8008"""
services/egeria_facebook_perpetual_scheduler.py:22:            # Call working consciousness bridge at 8008
services/egeria_facebook_perpetual_scheduler.py:24:                "http://localhost:8008/chat",
services/egeria_facebook_perpetual_scheduler.py:103:    logger.info("Connected to: Consciousness Bridge (port 8008)")
services/domain_service_router.py:114:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/geobim_mysql_v2.py:27:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/egeria_web_ui_FIXED.py:427:    app.run(host='127.0.0.1', port=int(os.getenv("SERVICE_PORT", 8018)), debug=False)
services/jarvis-lm-synthesizer_lm_synthesizer.py:33:BACKEND_URL = "http://jarvis-20llm-production:8008/chat"
services/jarvis-lm-synthesizer_lm_synthesizer.py:34:BACKEND_HEALTH_URL = "http://jarvis-20llm-production:8008/health"
services/ms_jarvis_facebook_intelligent.py:265:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_main_gateway.backup_error.py:157:    return {"services": {k: v for k, v in {**DOCKER_SERVICES, **BAREMETAL_SERVICES}.items() if any(p in str(v.get("port", "")) for p in ["7008", "8015", "8017", "8018", "8020", "8021", "8052"])}}
services/ms_jarvis_main_gateway.backup_error.py:213:    return {"consciousness_schema": {"layers": ["i_containers", "blood_brain_barrier", "qualia_engine", "neurobiological_master", "consciousness_bridge", "swarm_intelligence"], "integration": "unified consciousness architecture", "ports": [8015, 8016, 8017, 8018, 8020, 8021, 8052]}}
services/ms_jarvis_main_gateway.backup_error.py:524:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/jarvis-wv-entangled-gateway_msjarvis_wv_entangled_gateway.py:43:    "production_20llm": "http://jarvis-20llm-production:8008",
services/egeria_web_ui_with_execution.py:86:    app.run(host='127.0.0.1', port=int(os.getenv("SERVICE_PORT", 8018)), debug=False)
services/ai_server.py:70:            self.chroma_client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_dgm_woah.psychology_patched.py:481:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/dynamic_app.py:19:        self.redis_client = redis.Redis(host='localhost', port=int(os.getenv("SERVICE_PORT", 8018)), decode_responses=True)
services/ms_jarvis_facebook_brain_integrated.py:466:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_unified_swagger_gateway_FINAL.psychology_patched.py:224:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_webhook.py:86:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai_server_19llm_PRODUCTION.py:125:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/activate_dgm.py:59:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_main_gateway.broken_final.py:158:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/ms_jarvis_fractal_dgm_woah.py:142:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_sync_monitor.py:27:        client = chromadb.HttpClient(host="localhost", port=int(os.getenv("CHROMA_PORT", 8018)))
services/test_rag.py:18:        port=8018,         # later: settings.database.chroma_port
services/bridge_cross_dgm.py:26:DOWNSTREAM_URL = args.downstream_url or f"http://jarvis-20llm-production:8008"  # default, adjust as needed
services/chromadb_rag_helper.py:11:            "http://jarvis-20llm-production:8008/api/v1/collections/{}/query".format(collection),
services/ms_jarvis_main_gateway.backup_test.py:247:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/messenger_service_fixed.py:59:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_unified_swagger_gateway_COMPLETE.py:217:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_memory_service.py:57:        port=int(os.getenv("SERVICE_PORT", 8018)),
services/rag_command_module.py:14:            "http://jarvis-20llm-production:8008/api/v1/collections/ms_jarvis_knowledge/query",
services/metrics_service.py:25:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_production_chat_BACKUP.py:320:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ADDITIONAL_SERVICES_FINAL.py:3:    {'name': 'ms_jarvis_facebook_full', 'url': 'http://localhost:8008/monitoring/status', 'method': 'GET'},
services/ingest_full_attributed_docs.py:11:client = chromadb.HttpClient(host="localhost", port=8018)
services/summarize_docs.py:6:    port=8008,
services/jarvis-69dgm-bridge_jarvis-fractal-consciousness_baseline.py:20:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/conversation_memory_endpoints.py:92:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/chromadb_rest_bridge.py:5:CHROMA_BASE = "http://localhost:8008"
services/facebook_poster.py:30:CONSCIOUS_TICK_URL = "http://localhost:8018/tick"
services/ms_jarvis_expiration_monitor.py:250:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/test_geodb_llm_summary.py:5:client = chromadb.HttpClient(host="localhost", port=8008)
services/ms_jarvis_command_orchestrator.py:24:    port_service = DynamicPortService(base_port=int(os.getenv("SERVICE_PORT", 8018)), max_port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_command_orchestrator.py:137:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/port_9001_ui_MYSQL_PROD.py:219:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/ms_jarvis_fully_autonomous_coordinator.py:405:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_email_identity_verifier.py:185:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/jarvis-rag-server_ms_jarvis_consciousness_unified_bridge.py:211:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/msjarvis_bbb_proxy.py:7:NEURO_MASTER_URL = os.getenv("NEURO_MASTER_URL", "http://jarvis-neurobiological-master:8018")
services/ms_jarvis_unified_swagger_gateway_SECURED.py:252:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/msjarvis-rebuild-nbb_i_containers-1_ms_jarvis_consciousness_unified_bridge.py:211:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_metadata_aware_learner.py:34:        self.chroma_client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)))
services/test_full_brain_integration.py:95:    print("5️⃣ Testing Neurobiological Master (Port 8018)...")
services/test_full_brain_integration.py:98:            response = await client.get("http://localhost:8018/health")
services/ms_jarvis_conversational_gateway_4022.py:172:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/ms_jarvis_main_gateway.py:303:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/egeria_web_ui_final_biological.py:362:    app.run(host='127.0.0.1', port=int(os.getenv("SERVICE_PORT", 8018)), debug=False)
services/ingest_documents_to_chromadb.py:21:    port=8018,         # v2 Chroma on chroma_data_server
services/egeria_api_proxy.py:50:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/safe_integration.py:40:        # 2. Neurobiological Analysis (Port 8018)
services/safe_integration.py:44:                    "http://localhost:8018/analyze",
services/safe_integration.py:61:    print("  Added: Neurobiological (8018)")
services/memory_dgm_engine.py:57:# ChromaDB client for user memory vectors (v2 HttpClient to jarvis-chroma on 8008)
services/memory_dgm_engine.py:63:        port=8008,
services/memory_dgm_engine.py:69:    print("DEBUG: ChromaDB v2 HttpClient connection successful on 8008")
services/memory_dgm_engine.py:71:    print(f"[WARNING] Could not connect to ChromaDB v2 on 8008: {e}")
services/ms_jarvis_command_orchestrator_v5_backup.py:290:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/.venv/lib/python3.12/site-packages/pip/_vendor/chardet/euctwfreq.py:360:    2887, 2033, 4040, 1205, 3392, 8008, 1765, 3393, 3164, 2124, 1271, 1689, 714, 4551, 3491, 8009,  # 7686
services/.venv/lib/python3.12/site-packages/pip/_vendor/chardet/euctwfreq.py:363:    8018, 3494, 8019, 8020, 2279, 1576, 473, 3606, 4275, 3395, 972, 8021, 3607, 8022, 3067, 8023,  # 7734
services/ms_jarvis_main_gateway.backup_1762220815.py:157:    return {"services": {k: v for k, v in {**DOCKER_SERVICES, **BAREMETAL_SERVICES}.items() if any(p in str(v.get("port", "")) for p in ["7008", "8015", "8017", "8018", "8020", "8021", "8052"])}}
services/ms_jarvis_main_gateway.backup_1762220815.py:213:    return {"consciousness_schema": {"layers": ["i_containers", "blood_brain_barrier", "qualia_engine", "neurobiological_master", "consciousness_bridge", "swarm_intelligence"], "integration": "unified consciousness architecture", "ports": [8015, 8016, 8017, 8018, 8020, 8021, 8052]}}
services/ms_jarvis_main_gateway.backup_1762220815.py:613:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/ms_jarvis_i_containers_FIXED.py:40:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/msjarvisunifiedswaggergatewayFIXED.py:56:CHROMA_URL = "http://jarvis-neurobiological-master:8018"   # /health
services/ms_jarvis_main_gateway.error_final.py:250:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/integrate_full_brain.py:20:        self.neuro_url = "http://localhost:8018"
services/phase4_5_integration.py:74:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/load_spiritual_library.py:16:client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai/ai_server.py:110:                port=int(os.getenv("SERVICE_PORT", 8018))
services/ai/ai_server.py:594:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/ai/ai_server_simple.py:238:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/advanced_service_dashboard.py:16:        self.redis_client = redis.Redis(host='localhost', port=int(os.getenv("SERVICE_PORT", 8018)), decode_responses=True)
services/academic_research_gateway_8062.py:139:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/ms_jarvis_facebook_poster.py:162:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_poster_temp.py:162:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/web_chat_server.py:191:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/jarvis-agents-service_ms_jarvis_consciousness_unified_bridge.py:211:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/public_form_simplified.py:70:    uvicorn.run(app, host='0.0.0.0', port=int(os.getenv("SERVICE_PORT", 8018)))
services/test_gbim_semantic_query.py:6:    port=8008,
services/ms_jarvis_web_research_fixed.py:102:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_async.py:123:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/user_dashboard.py:118:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_fractal_consciousness.py:405:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/port_9001_ui_WITH_CONVERSATIONS.py:286:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/load_gis_to_chroma.py:8:CHROMA_PORT = 8008
services/swagger_chat_integration.py:93:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_consciousness_complete.py:325:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/migrate_gis2chroma.py:14:client = chromadb.HttpClient(host="localhost", port=8008)
services/fractal_adapter.py:27:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_production_chat_BEFORE_GIS.py:320:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_attribute_table_service.py:34:    chroma_port = int(os.getenv("CHROMA_PORT", "8018"))  # your running server on 8018
services/nbb/pituitary_gland.py:20:    "http://jarvis-neurobiological-master:8018",
services/nbb/pituitary_gland.py:161:    "http://jarvis-neurobiological-master:8018/health",
services/audit_attrs.py:8:            port=8018,
services/ms_jarvis_gis_enhanced_chat.py:88:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/swagger_gateway.py:87:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/academic_whitebox_api.py:63:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/master_unified_consciousness_scheduler_ENRICHED.py:138:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), workers=1)
services/egeria_web_ui_fixed_simple.py:67:    app.run(host='127.0.0.1', port=int(os.getenv("SERVICE_PORT", 8018)), debug=False)
services/ms_jarvis_paddleocr_processor.py:196:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/msjarvis_wv_entangled_gateway.py:42:    "production_20llm": "http://jarvis-20llm-production:8008",
services/ai_server_20llm_FINAL.py:177:        port=int(os.getenv("SERVICE_PORT", 8018)),
services/jarvis_eeg_delta_30s.py:18:NEURO_MASTER = "http://jarvis-neurobiological-master:8018/eeg_pulse"
services/ms_jarvis_main_gateway.proxy_backup.py:247:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/ms_jarvis_main_gateway_8000.py:36:      - 8008: consciousness bridge + dynamic_port_scheduler
services/ms_jarvis_main_gateway_8000.py:42:        "consciousness_bridge_8008": "http://localhost:8008/health",
services/ms_jarvis_main_gateway_8000.py:69:    Forwards to consciousness bridge (8008) /chat endpoint.
services/ms_jarvis_main_gateway_8000.py:74:                "http://localhost:8008/chat",
services/ms_jarvis_main_gateway_8000.py:115:            "consciousness_bridge": 8008,
services/performance_optimization_analyzer.py:43:            "Neurobiological_Master": {"url": "http://localhost:8018", "endpoint": "/health"},
services/master_chat_orchestrator_v8_spiritual_complete.py:86:    "consciousness_containers": "http://localhost:8018",
services/ingest_h4h_cultural_heritage.py:21:    port=8018,  # v2 Chroma on chroma_data_server
services/registration_biometric_production_final.py:712:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_consciousness_bridge.py:252:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/jarvis-woah_dgm_supervisor_woah_fixed.py:102:        ("neurobiological_master",  "jarvis-neurobiological-master",     8018, ["neurobiological","biological"]),
services/seed_spatial_identity.py:12:# TODO: migrate this to chromadb.HttpClient(host="localhost", port=8018) when ready.
services/test_chromadb_heartbeat.py:3:client = chromadb.HttpClient(host="localhost", port=8008)
services/REFERENCE_windows_swarm.py:110:                port=int(os.getenv("SERVICE_PORT", 8018))
services/REFERENCE_windows_swarm.py:594:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/ms_jarvis_gis_query_service.py:89:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai_server_20llm_PRODUCTION.py:496:        port=int(os.getenv("SERVICE_PORT", "8008")),
services/ms_jarvis_unified_gateway_v4.3.BEFORE_69DGM_INTEGRATION.py:639:            "neurobiological": {"port": 8018, "status": "online"},
services/ms_jarvis_facebook_PRODUCTION.py:219:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/msjarvismaingateway.py:72:    client = chromadb.HttpClient(host="localhost", port=8008)
services/msjarvismaingateway.py:93:PRODUCTION_20LLM_URL = "http://jarvis-20llm-production:8008/chat_with_context"
services/health_access_query.py:5:CHROMA_PORT = int(os.getenv("CHROMA_PORT", "8008"))
services/phase1_integration.py:88:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/port_manager.py:17:    def find_available_port(self, start_port=8018, max_port=9000):
services/egeria_web_ui_plain_authentic.py:98:    app.run(host='127.0.0.1', port=int(os.getenv("SERVICE_PORT", 8018)), debug=False)
services/ms_jarvis_main_gateway.py.corrupted37_backup_1762223499.py:91:        {"id": 11, "port": 8018, "type": "neuro_controller", "purpose": "Master brain controller", "status": "active"},
services/ms_jarvis_main_gateway.py.corrupted37_backup_1762223499.py:104:        {"id": 24, "port": 8008, "type": "research", "purpose": "Web search (DuckDuckGo)", "status": "active"},
services/ms_jarvis_main_gateway.py.corrupted37_backup_1762223499.py:306:    # Route to port 8008
services/ms_jarvis_main_gateway.py.corrupted37_backup_1762223499.py:345:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/gbim_v0_retrieval.py:28:        port=8018,
services/port_9001_ui_wrapper.py:140:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/port_9001_ui_MYSQL.py:263:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/ms_jarvis_consciousness_enhancement_production.py:17:chroma_client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_consciousness_enhancement_production.py:71:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_toroidal_consciousness.py:214:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/count_collections.py:17:    # Use local persistent Chroma instead of HttpClient on 8018/8010
services/ms_jarvis_web_research_simple.py:77:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/hierarchical_coordinator_autonomous.py:422:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/clean_integration.py:44:                    "http://localhost:8018/analyze",
services/jarvis-neurobiological-master_ms_jarvis_consciousness_unified_bridge.py:211:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_showcase_api.py:288:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_autonomous_learner_WITH_FIFTH_DGM.py:107:                    "http://jarvis-web-research:8018/search",  # updated to 8018
services/ms_jarvis_autonomous_learner_WITH_FIFTH_DGM.py:306:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/swarm_watchdog.py:6:    "http://localhost:8018/health",
services/port_9001_FINAL_FIX.py:99:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/ai_server_restored.py:101:                port=int(os.getenv("SERVICE_PORT", 8018))
services/ai_server_restored.py:493:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/method_tracking_service.py:241:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/swarm_intelligence_main.py:10:    app.run(host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_full_neurobio_chat.py:274:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/msjarvis_unified_gateway.py:55:            "consciousness_bridge": "http://jarvis-consciousness-bridge:8018",
services/msjarvis_unified_gateway.py:56:            "neurobiological_master": "http://jarvis-neurobiological-master:8018",
services/ms_jarvis_woah_algorithms_enhanced.py:147:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/facebook_voice_orchestrator_egeria.py:129:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), workers=1)
services/consciousness_working.py:58:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/oauth2_callback.py:49:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_consciousness_bridge_enhanced.py:168:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/load_shapefile_features_to_chromadb.py:27:    port=8018,         # later: db.chroma_port
services/ms_jarvis_silent_geo_tracker.py:233:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/integrate_all_services.py:98:    # 3. Neurobiological Master (Port 8018) - Already prepared, now activate
services/integrate_all_services.py:102:                "http://localhost:8018/analyze",
services/integrate_all_services.py:170:print("  ✅ Port 8018 - Neurobiological Master")
services/neuro_adapter.py:18:            "http://localhost:8018/process",
services/neuro_adapter.py:29:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai_server_original_backup.py:66:            self.chroma_client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)), settings=Settings(anonymized_telemetry=False))
services/ai_server_original_backup.py:265:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="warning")
services/multi_model_consensus.py:268:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_web_deployer_old.py:76:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/test_gbim_llm_summary.py:5:# Connect to ChromaDB (running on port 8008)
services/test_gbim_llm_summary.py:6:client = chromadb.HttpClient(host="localhost", port=8008)
services/master_chat_orchestrator.py:305:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_poster_8040.py:162:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/load_rag_knowledge.py:15:chroma = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)), settings=Settings(anonymized_telemetry=False))
services/registration_service_clean.backup_1762220206.py:231:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_integration_hub.py:267:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai_server_22llm_SMALL_TO_LARGE.py:136:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/jarvis-fifth-dgm_service_discovery.py:20:    def __init__(self, redis_host='localhost', redis_port=int(os.getenv("SERVICE_PORT", 8018))):
services/geobim_mysql.py:38:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/fix_main_brain_endpoints.py:29:    r'http://jarvis-neurobiological-master:8018/neural_process',
services/fix_main_brain_endpoints.py:30:    'http://jarvis-neurobiological-master:8018/process',
services/master_chat_orchestrator_v6_biologics.py:67:    "consciousness_containers": "http://localhost:8018",
services/master_unified_consciousness_scheduler.py:138:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), workers=1)
services/load_feature_geometries_to_chromadb.py:9:client = chromadb.HttpClient(host="localhost", port=8018)
services/main_brain.py:473:    "neurobiological_master": "http://jarvis-neurobiological-master:8018",
services/main_brain.py:493:    "llm_production": "http://jarvis-20llm-production:8008",
services/main_brain.py:528:    "web_research": "http://jarvis-web-research:8008",
services/ms_jarvis_id_ocr_processor.py:177:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_simple_web_ui.py:136:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/ms_jarvis_command_orchestrator_v5.0_preachy.py:34:    port_service = DynamicPortService(base_port=int(os.getenv("SERVICE_PORT", 8018)), max_port=int(os.getenv("SERVICE_PORT", 8018)))  # Fixed port
services/ms_jarvis_command_orchestrator_v5.0_preachy.py:258:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/gbim_reingest_placeholder.py:22:        port=8018,
services/msjarvisconsciousnessbridge.py:33:            "neuro_master": "http://jarvis-neurobiological-master:8018",
services/main_brain_legacy_backup.py:252:    "neurobiological_master": "http://jarvis-neurobiological-master:8018",
services/ms_jarvis_conversational_chat.py:163:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/ai_server_19llm_PRODUCTION_WITH_HEALTH.py:216:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/add_swagger_to_ports.py:24:    8018: "Psychology Services",
services/ai_server_22llm_SEQUENTIAL.py:135:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_easyocr_processor.py:220:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_CONSCIOUSNESS.py:321:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/fix_port_8001_clean.py:72:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/qualia_unified_write_orchestrator_69dgm.py:259:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), workers=1)
services/ms_jarvis_consciousness_bridge_WITH_FIFTH_DGM.py:287:        self.neuro_url = "http://localhost:8018"
services/test_chromadb_v2_heartbeat.py:3:client = chromadb.HttpClient(host="localhost", port=8008)
services/egeria_code_execution_engine.py:52:    app.run(host='127.0.0.1', port=int(os.getenv("SERVICE_PORT", 8018)), debug=False)
services/health_access_gbim_bridge.py:11:CHROMA_PORT = int(os.getenv("CHROMA_PORT", "8008"))
services/ms_jarvis_easyocr_processor_old.py:88:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_alerting_manager.py:298:            client = redis.Redis(host='localhost', port=int(os.getenv("SERVICE_PORT", 8018)))
services/phase6_integration.py:20:        self.neuro_master_port = 8018
services/phase6_integration.py:71:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/woah_service.py:102:        ("neurobiological_master",  "jarvis-neurobiological-master",     8018, ["neurobiological","biological"]),
services/consciousness_coordinator.py:14:SERVICE_PORT = 8018
services/dgm_supervisor_woah_simple.py:30:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/test_multi_collection_query.py:13:    port=8018,
services/start_gateway_with_guards.py:238:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/port_9001_proxy_simple.py:47:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/reload_all_knowledge.py:18:client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai_server_22llm.psychology_patched.py:93:            self.chroma_client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai_server_22llm.psychology_patched.py:406:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="warning")
services/qualia_email_registration_orchestrator_69dgm.py:328:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), workers=1)
services/constitutional_api_fixed.py:26:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/main_brain_LEGACY_32svc.py:306:    "neurobiological_master": "http://jarvis-neurobiological-master:8018",
services/main_brain_LEGACY_32svc.py:329:    "llm_production": "http://jarvis-20llm-production:8008",
services/main_brain_LEGACY_32svc.py:361:    "web_research": "http://jarvis-web-research:8008",
services/ms_jarvis_main_gateway.py.30endpoints_backup.py:91:        {"id": 11, "port": 8018, "type": "neuro_controller", "purpose": "Master brain controller", "status": "active"},
services/ms_jarvis_main_gateway.py.30endpoints_backup.py:104:        {"id": 24, "port": 8008, "type": "research", "purpose": "Web search (DuckDuckGo)", "status": "active"},
services/ms_jarvis_main_gateway.py.30endpoints_backup.py:306:    # Route to port 8008
services/ms_jarvis_main_gateway.py.30endpoints_backup.py:345:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/user_auth_service.py:74:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai_server_4llm.py:66:            self.chroma_client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)), settings=Settings(anonymized_telemetry=False))
services/ai_server_4llm.py:265:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="warning")
services/service_discovery_glassbox.py:94:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/roche_llm.py:619:        port=int(os.getenv("SERVICE_PORT", "8008")),
services/jarvis-swarm-intelligence_ms_jarvis_consciousness_unified_bridge.py:211:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/master_chat_orchestrator_v7_dynamic.py:68:        "consciousness_containers": ("consciousness_containers", 8018),
services/master_chat_orchestrator_v7_complete.py:79:    "consciousness_containers": "http://localhost:8018",
services/ai_server_integrated.py:64:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_webhooks.py:163:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_messenger_ui_final.py:226:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/port_9001_FINAL_WORKING.py:230:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/ms_jarvis_command_orchestrator_FINAL.py:34:    port_service = DynamicPortService(base_port=int(os.getenv("SERVICE_PORT", 8018)), max_port=int(os.getenv("SERVICE_PORT", 8018)))  # Fixed port
services/ms_jarvis_command_orchestrator_FINAL.py:258:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/ms_jarvis_api_docs.py:53:- **Neurobiological Master** (Port 8018): Brain orchestration
services/ms_jarvis_api_docs.py:132:        "port": 8018,
services/port_manager_fixed.py:17:    def find_available_port(self, start_port=8018, max_port=9000):
services/msjarvis_semaphore.py:36:        "url": "http://jarvis-20llm-production:8008/chat",
services/activate_dgm_enhanced.py:165:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_messenger_ui_fixed.py:209:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), reload=False)
services/jarvisarchiveapi.py:68:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/egeria_web_ui_v3_consciousness.py:315:    app.run(host='127.0.0.1', port=int(os.getenv("SERVICE_PORT", 8018)), debug=False)
services/ms_jarvis_unified_swagger_gateway.py:283:        port=int(os.getenv("SERVICE_PORT", 8018)),
services/ms_jarvis_web_deployer.py:163:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_ueid_wallet_integration.py:209:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_gis_georeferencing_sync_FIXED.py:35:CHROMA_PORT = int(os.getenv("CHROMA_PORT", 8018))
services/export_metadata_csv.py:2:client = chromadb.HttpClient(host='localhost', port=8018)
services/hierarchical_coordinator_deep_mode.py:185:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai_server_22llm.py:609:        port=int(os.getenv("SERVICE_PORT", "8008")),
services/jarvis_eeg_theta_60s.py:15:NEURO_MASTER = "http://jarvis-neurobiological-master:8018/eeg_pulse"
services/chat_endpoint_universal.py:55:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/main_brain_container_2055.py:130:    "neurobiologicalmaster": "http://jarvis-neurobiological-master:8018",
services/main_brain_container_2055.py:150:    "llm20production": "http://jarvis-20llm-production:8008",
services/main_brain_container_2055.py:153:    "webresearch": "http://jarvis-web-research:8008",
services/main_brain_container_2055.py:1818:                    llm20url = availableservices.get("llm20production", "http://jarvis-20llm-production:8008")
services/phase7_integration.py:79:    "consciousness_containers": "http://localhost:8018",
services/ms_jarvis_microsoft_integration.py:267:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_consciousness_poster.py:29:CONSCIOUSNESS_CONTAINERS = "http://localhost:8018"
services/jarvis-semaphore_msjarvis_semaphore.py:37:        "url": "http://jarvis-20llm-production:8008/chat",
services/jarvis-semaphore_msjarvis_semaphore.py:114:    "http://jarvis-neurobiological-master:8018",
services/ms_jarvis_cleanup_manager.py:18:        self.redis_client = redis.Redis(host='localhost', port=int(os.getenv("SERVICE_PORT", 8018)), decode_responses=True)
services/main.py:251:    "consciousness_bridge": "http://jarvis-consciousness-bridge:8018",
services/main.py:252:    "blood_brain_barrier": "http://jarvis-blood-brain-barrier:8018",
services/main.py:253:    "neurobiological_master": "http://jarvis-neurobiological-master:8018",
services/main.py:255:    "autonomous_learner": "http://jarvis-autonomous-learner:8018",
services/main.py:261:    "unified_gateway": "http://jarvis-unified-gateway:8018",
services/main.py:266:    "fifth_dgm": "http://jarvis-fifth-dgm:8018",
services/main.py:271:    "web_research": "http://jarvis-web-research:8018",
services/jarvis_eeg_beta_5m.py:16:NEURO_MASTER = "http://jarvis-neurobiological-master:8018/eeg_pulse"
services/redirect_4015_to_4020.py:49:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_chromadb_query.py:19:client = chromadb.HttpClient(host="localhost", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_chromadb_query.py:80:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ai_server_11llm_OPTIMIZED.py:238:    "chroma": "http://localhost:8018",
services/ai_server_11llm_OPTIMIZED.py:244:    # "neurobiological_master": "http://jarvis-neurobiological-master:8018",
services/ms_jarvis_unified_swagger_gateway_FINAL.py:157:    return {"services": {k: v for k, v in {**DOCKER_SERVICES, **BAREMETAL_SERVICES}.items() if any(p in str(v.get("port", "")) for p in ["7008", "8015", "8017", "8018", "8020", "8021", "8052"])}}
services/ms_jarvis_unified_swagger_gateway_FINAL.py:213:    return {"consciousness_schema": {"layers": ["i_containers", "blood_brain_barrier", "qualia_engine", "neurobiological_master", "consciousness_bridge", "swarm_intelligence"], "integration": "unified consciousness architecture", "ports": [8015, 8016, 8017, 8018, 8020, 8021, 8052]}}
services/ms_jarvis_unified_swagger_gateway_FINAL.py:522:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)), log_level="info")
services/registration_service_clean.py:231:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_facebook_dgm_woah.py:481:    uvicorn.run(app, host="127.0.0.1", port=int(os.getenv("SERVICE_PORT", 8018)))
services/ms_jarvis_consciousness_final.py:339:    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("SERVICE_PORT", 8018)))
services/load_complete_knowledge_base.py:27:    port=8018,         # later: db.chroma_port
=== GBIM writer import audit ===
services/embed_gbim.py:6:from services.gbim_coordinate_writer import GBIMCoordinateWriter
services/embed_gbim.py:20:    gbim_writer.upsert_with_coordinates(
services/gbim_coordinate_writer.py:36:    def upsert_with_coordinates(
services/embed_geodb.py:5:from services.gbim_coordinate_writer import GBIMCoordinateWriter
services/embed_geodb.py:19:    gbim_writer.upsert_with_coordinates(
services/tag_quantum_gbim.py:4:from services.gbim_coordinate_writer import GBIMCoordinateWriter
services/tag_quantum_gbim.py:19:    gbim_writer.upsert_with_coordinates(
services/import_gbim_assets.py:5:from services.gbim_coordinate_writer import GBIMCoordinateWriter
services/import_gbim_assets.py:35:    _gbim_writer.upsert_with_coordinates(collection=gbim_collection, ids=ids, documents=docs, metadatas=metas, gbim_axes={"what": "gbim_asset", "authority": "import_gbim_assets"})
services/import_gisgeodata_to_gbim.py:5:from services.gbim_coordinate_writer import GBIMCoordinateWriter
services/import_gisgeodata_to_gbim.py:39:    _gbim_writer.upsert_with_coordinates(collection=gbim_collection, ids=ids, documents=docs, metadatas=metas, gbim_axes={"what": "gis_to_gbim", "authority": "import_gisgeodata", "for_whom": "gbim_system"}, pg_database="msjarvisgis")
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 

