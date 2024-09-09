export const responseSchema = {
    "type": "object",
    "properties": {
        "days": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "day": {
                        "type": "string"
                    },
                    "breakfast": {
                        "type": "object",
                        "properties": {
                            "recipe": {
                                "type": "string"
                            },
                            "instructions": {
                                "type": "string"
                            },
                            "ingredients": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "preparationTime": {
                                "type": "string"
                            }
                        },
                        "required": ["recipe", "instructions", "ingredients", "preparationTime"]
                    },
                    "lunch": {
                        "type": "object",
                        "properties": {
                            "recipe": {
                                "type": "string"
                            },
                            "instructions": {
                                "type": "string"
                            },
                            "ingredients": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "preparationTime": {
                                "type": "string"
                            }
                        },
                        "required": ["recipe", "instructions", "ingredients", "preparationTime"]
                    },
                    "dinner": {
                        "type": "object",
                        "properties": {
                            "recipe": {
                                "type": "string"
                            },
                            "instructions": {
                                "type": "string"
                            },
                            "ingredients": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "preparationTime": {
                                "type": "string"
                            }
                        },
                        "required": ["recipe", "instructions", "ingredients", "preparationTime"]
                    },
                },
                "required": ["day", "breakfast", "lunch", "dinner"]
            }
        }
    }
};