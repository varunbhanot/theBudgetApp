package com.varun.budgetapp.expensemanager.web;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;

import com.varun.budgetapp.expensemanager.domain.CashFlow;
import com.varun.budgetapp.expensemanager.service.CashFlowService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

/**
 * IncomeController
 */
@RestController
@Slf4j
public class CashFlowController {

    @Autowired
    private CashFlowService service;

    @PostMapping(name = "/cashflow", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<CashFlow> addIncome(@RequestBody @Valid CashFlow request) {
        log.info("Adding income : {}", request);
        return new ResponseEntity<CashFlow>(service.addIncome(request), HttpStatus.CREATED);
    }

    @GetMapping(name = "/cashflow/all")
    public ResponseEntity<List<CashFlow>> getAllIncomeByDate(@RequestParam("from") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam("to") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {
        log.info("Getting income entries from : {}  to: {}", from, to);
        return new ResponseEntity<List<CashFlow>>(service.retrieveEntryByDate(from, to), HttpStatus.OK);
    }

    @GetMapping("/balance")
    public ResponseEntity<BigDecimal> getBalanceByDate(@RequestParam("from") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
    @RequestParam("to") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to){
        log.info("Getting balance from : {}  to: {}", from, to);
        return new ResponseEntity<BigDecimal>(service.getBalance(from, to), HttpStatus.OK);
    }

}