package com.varun.budgetapp.expensemanager.repository;

import java.time.LocalDateTime;
import java.util.List;

import com.varun.budgetapp.expensemanager.domain.CashFlow;

import org.springframework.data.repository.CrudRepository;

/**
 * IncomeRepository
 */
public interface CashFlowRepository extends CrudRepository<CashFlow, Long> {

    List<CashFlow> findAllByEntryTimeBetween(LocalDateTime from, LocalDateTime to);

}