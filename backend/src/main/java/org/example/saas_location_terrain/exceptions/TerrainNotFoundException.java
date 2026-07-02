package org.example.saas_location_terrain.exceptions;

public class TerrainNotFoundException extends RuntimeException {
    public TerrainNotFoundException(String message) {
        super(message);
    }
}
