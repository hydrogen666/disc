import json
# -*- coding: UTF-8 -*-
output = []
with open('questions.txt', 'r', encoding='utf-8') as q:
    with open('answers.txt', 'r', encoding='utf-8') as a:
        
        
        while True:
            question = q.readline()
            if question == '':
                break;
            block = {}
            block['question'] = question.strip()
            block['answers'] = []
            a.readline()
            answer_values = a.readline().split()
            
            for i in range(4):
                answer_text = q.readline().strip()
                block['answers'].append({
                    'text': answer_text,
                    'value': answer_values[i]
                })
            output.append(block)
           

with open('result.json', 'w') as result:
    json.dump(output, result,  ensure_ascii=False, sort_keys=True, indent=4)
    
            
        