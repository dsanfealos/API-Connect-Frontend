package com.APIConnectFrontend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class CustomerController {

    @GetMapping("/")
    public String home(){
        return "index";
    }

    @GetMapping("/update/{id}")
    public String updateCustomer (@PathVariable("id") Integer id){
        return "updateCustomer";
    }
}
