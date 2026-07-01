package org.example.saas_location_terrain.exceptions;

public class TelephoneAlreadyUsedException extends RuntimeException {
    public TelephoneAlreadyUsedException(String message) {
        super(message);
    }
}
