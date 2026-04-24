                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "cat": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "0338d961-4f32-43ce-9afa-25ecb4ba0185",
        "name": "fifth_dgm_subconscious",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "timestamp": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "session_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "03627c99-c66a-4dbc-b42d-4e2052ff51ae",
        "name": "autonomous_learning",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "source_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "compressed": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "content_hash": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "gbim_coordinate": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "title": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "backfill": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "url": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "cycle_number": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "topic": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "learned_at": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "fallback": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "Autonomously acquired knowledge"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "05c59b1f-d0c3-4cbd-bd60-ddf151307315",
        "name": "zcta_centroids",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "cy": {
                    "float": {
                        "float_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "lon": {
                    "float": {
                        "float_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "cx": {
                    "float": {
                        "float_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "zcta5": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "lat": {
                    "float": {
                        "float_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "062ab0ff-f06a-4beb-ba61-81461f4079c8",
        "name": "safety_rules",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "wv_tagged": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "rule_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "wv_tagged": true,
            "description": "Safety constitutional rules \u2014 Ms. Jarvis ethical guardrails",
            "status": "created_empty_2026-03-24"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "0c88a778-02bf-475f-ba80-64b9f4467e84",
        "name": "economic_rag",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "wv_tagged": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "Economic indicators \u2014 Appalachian regional data",
            "status": "created_empty_2026-03-24",
            "wv_tagged": true
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "14ac9d34-86df-4db1-8b28-c9f31c7bb3b8",
        "name": "gis_data",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": null
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "created": "ms-jarvis"
        },
        "dimension": null,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "15a7496c-dce4-4f57-a86f-2f6b97665d72",
        "name": "jarvis_knowledge",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "cat": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "17f69cca-d74f-4f93-bb89-774dc339eeab",
        "name": "address_points",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "zip": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "lon": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "esn": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "lat": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "21151130-0704-416b-9cd8-6c7403c1aeae",
        "name": "geospatialfeatures",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "lon": {
                    "float": {
                        "float_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "dataset": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "label": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "lat": {
                    "float": {
                        "float_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "layer": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "WV GIS spatial features \u2014 132 datasets, 384-dim embeddings"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "27f9d49b-c2a0-4c5e-91f5-8441105fedc9",
        "name": "conversation_gbim_private",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "place": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "session_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "user_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "turn_number": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "immutability_hash": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "created_at": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "belief_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "intent": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "privacy_tier": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "privacy_tier": "private",
            "description": "Private conversation GBIM \u2014 per-user, session-anchored",
            "access": "ms_jarvis_only",
            "gbim_axes": "who,what,where,when,how,why,for_whom,authority,evidence"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "28014347-d398-4f92-b0ca-81a1de7fc4eb",
        "name": "policy_rag",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "wv_tagged": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "WV policy documents \u2014 state and regional legislation",
            "status": "created_empty_2026-03-24",
            "wv_tagged": true
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "2a8fd74d-5433-4ec9-8d2f-7d56d0843f4b",
        "name": "ms_jarvis_memory",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "date": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "2bc09932-0ec4-4883-9abd-bf18f3769eaa",
        "name": "grants_rag",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "wv_tagged": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "wv_tagged": true,
            "status": "created_empty_2026-03-24",
            "description": "Grant opportunities \u2014 federal, state, and foundation funding"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "3a193c3b-4743-4267-878d-cacb6c0c3ba2",
        "name": "appalachian_cultural_intelligence",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "cultural_family": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "tier": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "subcategory": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "query": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "url": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "title": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "ingested_at": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "published": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "tradition": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "location": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "3b4317d9-19e4-495c-b91e-6e02686d67f0",
        "name": "GBIM_sample_rows",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "source_table": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source_pk": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "created_at": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "belief_state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "entity_type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "label": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "worldview_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "3f9c0200-ba98-4a38-8320-7abd2adf1b12",
        "name": "research_history",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "timestamp": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "topic": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "stored_count": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "cycle": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "History of autonomous research activities"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "415fbdfe-b7e2-44ee-aba0-619566050bfc",
        "name": "au02_threat_seeds",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "48a97656-e254-4e44-9294-bbfffd87bf07",
        "name": "gbim_entities",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": null
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "created": "ms-jarvis"
        },
        "dimension": null,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "4a4ea5e5-cb8a-46dd-97c4-c8f23ce25958",
        "name": "pia_records",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": null
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "PIA cycle audit records \u2014 automated psychological integrity sampling outputs",
            "hnsw:space": "cosine",
            "created": "2026-04-08",
            "source": "jarvis-pia-sampler"
        },
        "dimension": null,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "4b1af913-3248-425c-8af1-8ee08df8e226",
        "name": "ms_jarvis_identity",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "date": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "524507db-559b-44e5-80a1-b25896a3c229",
        "name": "gis_wv_benefits",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "fips_county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "program_name": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "geo_method": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "service_type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "city": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "phone": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source_file": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "url": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "zip_code": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "WV state benefits and social services programs"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "5627f6ba-115d-4d7b-898d-a2436e6513ac",
        "name": "news_rag",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "url": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "wv_tagged": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "pubdate": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "Regional news \u2014 WV and Appalachian media",
            "status": "created_empty_2026-03-24",
            "wv_tagged": true
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "571eebfa-b122-4e91-af3a-a7aa9a188ba1",
        "name": "gbim_beliefs_v2",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": null
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "proposition_code": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "belief_strength": {
                    "float": {
                        "float_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "wv_tag": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "wv_tagged": true,
            "hnsw:space": "cosine",
            "description": "GBIM belief propositions v2 \u2014 WV landowner and community beliefs"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "5a103162-2f32-4da5-9456-e0cffbe3d5f9",
        "name": "spiritual_knowledge",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": null
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "cat": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "ref": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "created": "ms-jarvis"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "66856dfb-18f6-4dc8-9182-3d4f27ba800b",
        "name": "spiritual_texts",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "origin_lon": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "tradition": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "title": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "wv_tagged": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "origin_lat": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "region": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "cultural_family": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "chunk": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "filename": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "origin_notes": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source_file": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "chunk_index": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    },
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine",
            "description": "Mother Carrie Protocol \u2014 72 religious traditions corpus"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "6727fb3e-078f-49d5-9df8-e2c82ecf8cf2",
        "name": "conversation_history",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "user_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "session_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "role": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "timestamp": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "6a39f36c-5da7-45b7-82f2-b2684415ebcd",
        "name": "appalachian_english_corpus",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "subcategory": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "published": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "tier": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "url": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "ingested_at": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "title": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "6acb5634-7ae4-41ae-b487-09da0be84f48",
        "name": "governance_rag",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "chunk": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "title": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "7b85b2be-c1ae-4154-931a-af6a91119b7e",
        "name": "local_resources",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": null
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "verified": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    },
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "phone": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "zip": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "url": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "created": "ms-jarvis"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "84bfcc58-4c4a-43db-85d8-0eff476ae40a",
        "name": "fayette_county_resources_2026",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "doc_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "ingest_date": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "gbim_lon": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "gbim_lat": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "extraction_method": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "contributor_role": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source_file": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "address_count": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "geo_anchor_count": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "year": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "chunk_index": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "contributor": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "gbim_entity_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "county_fips": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "870f3910-c699-4d47-b616-e51f0fccac85",
        "name": "jarvis",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": null
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "872f538b-a930-4427-b309-19c1d081537d",
        "name": "health_rag",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "wv_tagged": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "Community health data \u2014 WV DHHR, county health depts",
            "status": "created_empty_2026-03-24",
            "wv_tagged": true
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "8c359463-244c-4441-a698-b498fd1da5dc",
        "name": "psychological_rag",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "page": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "role": "rag",
            "domain": "psychological"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "ac277ccb-e1ec-45b6-b8b4-e40666f49f95",
        "name": "GBIM_sample",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "location": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "timestamp": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "lon": {
                    "float": {
                        "float_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "quantum_tag": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "lat": {
                    "float": {
                        "float_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "b2a59ffc-a3a5-4c06-90c9-8954b33992f1",
        "name": "conversation_gbim_public",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "belief_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "immutability_hash": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "turn_number": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "user_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "created_at": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "place": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "privacy_tier": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "session_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "intent": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "Public conversation GBIM \u2014 anonymized community patterns",
            "privacy_tier": "public",
            "access": "dao_governed",
            "gbim_axes": "what,where,when,why,for_whom"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "b5fc8850-dd4c-4e7f-857c-b049a5b6e2de",
        "name": "psychological_knowledge",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": null
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "created": "ms-jarvis"
        },
        "dimension": null,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "c0111c70-db44-4e0a-8a97-f6a7a5c59ec9",
        "name": "spiritual_wisdom",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "tradition": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "c303b088-d3c3-4569-9b7e-5053514c2b32",
        "name": "wv_resources",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": null
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "cat": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "created": "ms-jarvis"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "cb0e2432-3a8c-44c0-8839-d94beebff42f",
        "name": "meeting_minutes",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "status": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "wv_tagged": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "status": "created_empty_2026-03-24",
            "description": "Community meeting minutes \u2014 Fayette County and regional",
            "wv_tagged": true
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "ddb233d7-1642-4486-bde9-4cd4d96c3f43",
        "name": "commons_rag",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "title": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "chunk": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "e0caffcd-136e-4ac2-addc-f4c9b1814ac2",
        "name": "legal_rag",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "wv_tagged": {
                    "bool": {
                        "bool_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "Legal and regulatory documents \u2014 WV code and federal",
            "status": "created_empty_2026-03-24",
            "wv_tagged": true
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "e666b46d-e04f-4fd6-a0ce-067a06f491b6",
        "name": "gbim_worldview_entities",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "source_pk": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "entity_type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "created_at": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source_table": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "belief_state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "parcel_resolution": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "centroid_y": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "centroid_x": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "worldview_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "coord_srid": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "label": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "GBIM entities",
            "worldview_id": "002c2c84-2f18-40b7-8a98-b8d813dd6cc7"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "e7e83578-973e-474e-a6d4-ea91d5d5289d",
        "name": "autonomous_learner",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "action_type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "layer_key": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "feature_count": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "learned_at": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "timestamp": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "index": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "collection": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "entity_type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "table_key": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "decision": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "user_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "total_pop": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "actor_role": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "chunk_idx": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "cycle": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "services": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "topic": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "domain": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "f6d0a9cd-4c76-4b7d-be6a-5249db9ff7ab",
        "name": "contracts",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "f776101b-133d-4b2b-af3b-e30fbe7f456a",
        "name": "GBIM_Fayette_sample",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "label": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "entity_type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "source_table": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "worldview_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "belief_state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": {
            "state": "WV",
            "gbim_source": "msjarvisgis + worldview",
            "county": "Fayette",
            "description": "GBIM Fayette County WV \u2014 home county belief slice"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "f9152993-c774-47ef-8760-63f7dc50e747",
        "name": "msjarvis_docs",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "verified": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "name": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "zip": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "filename": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "page": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "programs": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "jurisdiction": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "path": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "timestamp": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "category": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "resource_type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "doc_type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "local_resource_id": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "pulse": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "topic": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "zip_code": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "chunk": {
                    "int": {
                        "int_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "ff2f7717-3e21-4e6b-8244-e8da1aa2bb36",
        "name": "operations_history",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "containers": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "logged_at": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "result": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "description": "VERIFYANDTEST.sh and preflight_gate.sh run logs"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    }
]
[
    {
        "id": "0e62fd1a-ed10-4d07-9328-65e0b3071f83",
        "name": "wv_facilities",
        "configuration_json": {
            "hnsw": {
                "space": "cosine",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "cosine",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "county": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "phone": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source_table": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "state": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "cosine",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": {
            "hnsw:space": "cosine"
        },
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "33169bee-8e1e-470a-b0c3-eac5b5e811a7",
        "name": "psych_test",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": null,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "38737ffd-7387-4022-920e-3983380431c7",
        "name": "pia_records",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "status": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                },
                "phase": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "event_type": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "timestamp": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                },
                "source": {
                    "string": {
                        "fts_index": {
                            "enabled": false,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": true,
                            "config": {}
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": 384,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    },
    {
        "id": "64689cea-4474-4b2d-92cf-a3eea8e278ca",
        "name": "psychological_rag_domain",
        "configuration_json": {
            "hnsw": {
                "space": "l2",
                "ef_construction": 100,
                "ef_search": 100,
                "max_neighbors": 16,
                "resize_factor": 1.2,
                "sync_threshold": 1000
            },
            "spann": null,
            "embedding_function": {
                "type": "known",
                "name": "default",
                "config": {}
            }
        },
        "schema": {
            "defaults": {
                "string": {
                    "fts_index": {
                        "enabled": false,
                        "config": {}
                    },
                    "string_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float_list": {
                    "vector_index": {
                        "enabled": false,
                        "config": {
                            "space": "l2",
                            "embedding_function": {
                                "type": "known",
                                "name": "default",
                                "config": {}
                            },
                            "hnsw": {
                                "ef_construction": 100,
                                "max_neighbors": 16,
                                "ef_search": 100,
                                "num_threads": 32,
                                "batch_size": 100,
                                "sync_threshold": 1000,
                                "resize_factor": 1.2
                            }
                        }
                    }
                },
                "sparse_vector": {
                    "sparse_vector_index": {
                        "enabled": false,
                        "config": {
                            "embedding_function": {
                                "type": "unknown"
                            },
                            "bm25": false
                        }
                    }
                },
                "int": {
                    "int_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "float": {
                    "float_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                },
                "bool": {
                    "bool_inverted_index": {
                        "enabled": true,
                        "config": {}
                    }
                }
            },
            "keys": {
                "#document": {
                    "string": {
                        "fts_index": {
                            "enabled": true,
                            "config": {}
                        },
                        "string_inverted_index": {
                            "enabled": false,
                            "config": {}
                        }
                    }
                },
                "#embedding": {
                    "float_list": {
                        "vector_index": {
                            "enabled": true,
                            "config": {
                                "space": "l2",
                                "embedding_function": {
                                    "type": "known",
                                    "name": "default",
                                    "config": {}
                                },
                                "source_key": "#document",
                                "hnsw": {
                                    "ef_construction": 100,
                                    "max_neighbors": 16,
                                    "ef_search": 100,
                                    "num_threads": 32,
                                    "batch_size": 100,
                                    "sync_threshold": 1000,
                                    "resize_factor": 1.2
                                }
                            }
                        }
                    }
                }
            }
        },
        "metadata": null,
        "dimension": null,
        "tenant": "default_tenant",
        "database": "default_database",
        "log_position": 0,
        "version": 0
    }
]
/data/chroma.sqlite3
/data/chroma.sqlite3
                                                          List of databases
       Name       |  Owner   | Encoding | Locale Provider |  Collate   |   Ctype    | ICU Locale | ICU Rules |   Access privileges   
------------------+----------+----------+-----------------+------------+------------+------------+-----------+-----------------------
 msjarvis         | msjarvis | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | 
 msjarvisgis      | msjarvis | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | 
 postgres         | msjarvis | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | 
 template0        | msjarvis | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/msjarvis          +
                  |          |          |                 |            |            |            |           | msjarvis=CTc/msjarvis
 template1        | msjarvis | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/msjarvis          +
                  |          |          |                 |            |            |            |           | msjarvis=CTc/msjarvis
 template_postgis | msjarvis | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | 
(6 rows)

(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 
