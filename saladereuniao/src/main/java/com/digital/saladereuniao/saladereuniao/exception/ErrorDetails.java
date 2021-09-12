package com.digital.saladereuniao.saladereuniao.exception;

import java.util.Date;

public class ErrorDetails {

    private Date timestamp;
    private String message;
    private String details;

    public ErrorDetails(Date timestamp, String message, String detais){
        super();
        this.timestamp = timestamp;
        this.message = message;
        this.details = detais;
    }


    public Date getTimestamp() {
        return timestamp;
    }
        
    public String getMessage() {
        return message;
    }
    
    public String getDetails() {
    	return details;
    }


}