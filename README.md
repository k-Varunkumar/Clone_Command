## Create a clone on command
1.Set up is same as before as in automatic clone but instead of automatic event trigger, we have command event trigger\
2.Here we defined the command in the discussion tab of the issue\
3.Event object that we get in the function has completely different payload\
4.so in automatic payload we get the full info of the worktime that trigger the event\
5.but in command payload we just get the source_id that is we get the info of the source event trigger\
6.now using this, we use getworkitem api to access the full info of that particular workitem\
7.Now using this, we create a new workitem using this that is the clone of the original source workitem\
8.But when we install in snap-in UI, and try to run this command it gives "something went wrong" or "bad request"
